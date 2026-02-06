"use client";

import * as React from "react";
import { Calculator, Clock, DollarSign, ListChecks } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { calculateRoleRoi, type RoleRoiInputs } from "@/lib/roi/roleRoi";

interface SliderConfig {
  key: keyof RoleRoiInputs;
  label: string;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}

interface RoleCalculatorProps {
  defaults: RoleRoiInputs;
  sliders: SliderConfig[];
  hourlyRate: number;
}

export default function RoleCalculator({ defaults, sliders, hourlyRate }: RoleCalculatorProps) {
  const [values, setValues] = React.useState<RoleRoiInputs>({ ...defaults, hourlyRate });

  const update = (key: keyof RoleRoiInputs, val: number) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  const result = calculateRoleRoi(values);

  return (
    <Card className="border-secondary/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calculator className="w-5 h-5 text-secondary" />
          Role ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {sliders.map((s) => {
          const current = (values[s.key] as number) ?? s.min;
          return (
            <div key={s.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor={`slider-${s.key}`} className="text-sm font-medium text-foreground">
                  {s.label}
                </label>
                <span className="text-sm font-bold text-secondary">
                  {current}{s.suffix ?? ""}
                </span>
              </div>
              <input
                id={`slider-${s.key}`}
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={current}
                onChange={(e) => update(s.key, Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{s.min}{s.suffix ?? ""}</span>
                <span>{s.max}{s.suffix ?? ""}</span>
              </div>
            </div>
          );
        })}

        {/* Automation Adoption Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="slider-adoption" className="text-sm font-medium text-foreground">
              Automation Adoption
            </label>
            <span className="text-sm font-bold text-secondary">
              {Math.round((values.automationAdoption ?? 0.7) * 100)}%
            </span>
          </div>
          <input
            id="slider-adoption"
            type="range"
            min={0.1}
            max={1}
            step={0.05}
            value={values.automationAdoption ?? 0.7}
            onChange={(e) => update("automationAdoption", Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>10%</span>
            <span>100%</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span>Hourly Rate: <strong>${hourlyRate}/hr</strong></span>
          <span>Adoption: <strong>{Math.round((values.automationAdoption ?? 0.7) * 100)}%</strong></span>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
            <Clock className="w-4 h-4 text-green-600 mx-auto mb-1" />
            <p className="text-2xl font-bold text-green-700">{result.hoursSavedPerWeek}</p>
            <p className="text-xs text-green-600">hrs saved / week</p>
          </div>
          <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
            <DollarSign className="w-4 h-4 text-green-600 mx-auto mb-1" />
            <p className="text-2xl font-bold text-green-700">
              ${result.dollarsSavedPerMonth.toLocaleString()}
            </p>
            <p className="text-xs text-green-600">saved / month</p>
          </div>
          <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
            <ListChecks className="w-4 h-4 text-green-600 mx-auto mb-1" />
            <p className="text-2xl font-bold text-green-700">{result.tasksReplaced}</p>
            <p className="text-xs text-green-600">task categories automated</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground italic">
          Estimates only; actual results depend on volume, workflows, and adoption.
        </p>
      </CardContent>
    </Card>
  );
}
