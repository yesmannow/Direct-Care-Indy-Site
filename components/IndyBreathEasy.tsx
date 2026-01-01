"use client";

import { useState, useEffect } from 'react';
import { Wind, AlertCircle, CheckCircle2, Info } from 'lucide-react';

export default function IndyBreathEasy() {
  const [aqiData, setAqiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Indianapolis Coordinates for Pike Medical (46268 area)
    const lat = 39.89;
    const lon = -86.21;
    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

    if (!API_KEY) {
      console.warn("OpenWeather API key not configured");
      setLoading(false);
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.list && data.list[0]) {
          setAqiData(data.list[0]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !aqiData) {
    return <div className="animate-pulse h-48 bg-slate-100 rounded-3xl" />;
  }

  const aqi = aqiData.main.aqi; // Scale 1-5
  const components = aqiData.components;

  const getStatus = (val: number) => {
    if (val <= 2) return { label: "Good", color: "text-emerald-600", bg: "bg-emerald-50", icon: <CheckCircle2 className="w-5 h-5" /> };
    if (val === 3) return { label: "Moderate", color: "text-amber-600", bg: "bg-amber-50", icon: <Info className="w-5 h-5" /> };
    return { label: "High Alert", color: "text-red-600", bg: "bg-red-50", icon: <AlertCircle className="w-5 h-5" /> };
  };

  const status = getStatus(aqi);

  return (
    <div className={`p-8 rounded-3xl border transition-all ${status.bg} border-slate-200 shadow-sm`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 uppercase tracking-tight">
            <Wind className={status.color} /> Indy Breath-Easy Index
          </h3>
          <p className="text-sm text-slate-500 font-medium">Real-time Respiratory Tracking for NW Indy</p>
        </div>
        <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${status.color} border-current`}>
          {status.label}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "PM2.5", val: components.pm2_5 },
          { label: "PM10", val: components.pm10 },
          { label: "NO2", val: components.no2 },
          { label: "O3", val: components.o3 }
        ].map((stat) => (
          <div key={stat.label} className="bg-white/50 p-3 rounded-2xl border border-white/80">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</p>
            <p className="text-lg font-black text-slate-800">{Math.round(stat.val)}<span className="text-[8px] ml-0.5 opacity-50">µg/m³</span></p>
          </div>
        ))}
      </div>

      {aqi >= 4 ? (
        <div className="bg-red-600 text-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <p className="text-xs font-bold leading-tight flex-1">High triggers detected. Pulmonary members: Contact Chase or Karina for a plan update.</p>
          <a
            href="tel:+13179566288"
            className="bg-white text-red-600 px-4 py-2 rounded-xl text-xs font-black uppercase min-h-[44px] min-w-[120px] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            Text Spruce
          </a>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xs text-slate-500 italic">"Conditions look stable. A perfect day for preventative wellness." — Dr. James Pike</p>
        </div>
      )}
    </div>
  );
}

