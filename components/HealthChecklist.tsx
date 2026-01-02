import { Suspense } from "react";
import { CheckCircle2, ExternalLink, Loader2 } from "lucide-react";
import { getSeniorScreenings } from "@/lib/api/healthfinder";

interface HealthChecklistProps {
  age: number;
  sex: 'male' | 'female';
}

async function HealthChecklistContent({ age, sex }: HealthChecklistProps) {
  const screenings = await getSeniorScreenings(age, sex);

  if (screenings.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <p className="text-gray-400 text-center">
          Unable to load screening recommendations at this time. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">
          Evidence-Based Screenings for {age}+ Year Olds
        </h3>
        <p className="text-gray-300 text-sm">
          Recommendations from the Office of Disease Prevention and Health Promotion
        </p>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {screenings.map((screening, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-100 mb-1">{screening.Title}</h4>
                <p className="text-sm text-gray-300 mb-2">{screening.Description}</p>
                {screening.Url && (
                  <a
                    href={screening.Url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors"
                  >
                    Learn more <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700 flex items-center justify-center gap-2">
        <img
          src="https://health.gov/sites/default/files/2020-12/myhealthfinder-logo.png"
          alt="MyHealthfinder"
          className="h-8"
        />
        <a
          href="https://health.gov/myhealthfinder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-primary transition-colors"
        >
          Source: MyHealthfinder.gov
        </a>
      </div>
    </div>
  );
}

export function HealthChecklist({ age, sex }: HealthChecklistProps) {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Loading screening recommendations...</span>
          </div>
        </div>
      }
    >
      <HealthChecklistContent age={age} sex={sex} />
    </Suspense>
  );
}

