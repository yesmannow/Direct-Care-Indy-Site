export interface RoleRoiInputs {
  callsPerDay?: number;
  minutesPerCall?: number;
  voicemailsPerDay?: number;
  minutesPerVoicemail?: number;
  chartingMinutesPerVisit?: number;
  visitsPerDay?: number;
  billingMinutesPerDay?: number;
  preVisitPrepMinutes?: number;
  automationAdoption?: number; // 0-1
  hourlyRate?: number;
}

export interface RoleRoiResult {
  minutesSavedPerDay: number;
  hoursSavedPerWeek: number;
  dollarsSavedPerMonth: number;
  tasksReplaced: number;
}

export function calculateRoleRoi(inputs: RoleRoiInputs): RoleRoiResult {
  const adoption = inputs.automationAdoption ?? 0.7;
  const hourlyRate = inputs.hourlyRate ?? 25;

  const taskMinutes: number[] = [];

  if (inputs.callsPerDay && inputs.minutesPerCall) {
    taskMinutes.push(inputs.callsPerDay * inputs.minutesPerCall * adoption);
  }
  if (inputs.voicemailsPerDay && inputs.minutesPerVoicemail) {
    taskMinutes.push(inputs.voicemailsPerDay * inputs.minutesPerVoicemail * adoption);
  }
  if (inputs.chartingMinutesPerVisit && inputs.visitsPerDay) {
    taskMinutes.push(inputs.chartingMinutesPerVisit * inputs.visitsPerDay * adoption);
  }
  if (inputs.billingMinutesPerDay) {
    taskMinutes.push(inputs.billingMinutesPerDay * adoption);
  }
  if (inputs.preVisitPrepMinutes && inputs.visitsPerDay) {
    taskMinutes.push(inputs.preVisitPrepMinutes * inputs.visitsPerDay * adoption);
  }

  const minutesSavedPerDay = taskMinutes.reduce((sum, m) => sum + m, 0);
  const hoursSavedPerWeek = (minutesSavedPerDay * 5) / 60;
  const dollarsSavedPerMonth = hoursSavedPerWeek * hourlyRate * 4;
  const tasksReplaced = taskMinutes.filter((m) => m > 0).length;

  return {
    minutesSavedPerDay: Math.round(minutesSavedPerDay),
    hoursSavedPerWeek: Math.round(hoursSavedPerWeek * 10) / 10,
    dollarsSavedPerMonth: Math.round(dollarsSavedPerMonth),
    tasksReplaced,
  };
}
