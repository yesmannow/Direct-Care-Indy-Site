/**
 * Centralized Lab Data for Direct Care Indy
 * 
 * This file contains the complete directory of wholesale lab tests
 * with hospital pricing comparison data.
 * 
 * All lab-related components should import from this single source of truth.
 */

export interface LabTest {
  name: string;
  hospital: number;  // Hospital/retail price in dollars
  dpc: number;       // Direct Primary Care wholesale price in dollars
}

/**
 * Complete directory of available lab tests
 * Hospital rates based on Indianapolis market median 2026
 * DPC prices reflect Direct Care Indy wholesale rates for members
 */
export const LAB_DATA: LabTest[] = [
  { name: "A1C (Diabetes Monitoring)", hospital: 173, dpc: 8 },
  { name: "Lipid Panel (Cholesterol)", hospital: 176, dpc: 6 },
  { name: "CBC (Complete Blood Count)", hospital: 115, dpc: 5 },
  { name: "TSH (Thyroid Stimulating Hormone)", hospital: 195, dpc: 12 },
  { name: "Vitamin D Deficiency", hospital: 240, dpc: 18 },
  { name: "CMP (Comprehensive Metabolic)", hospital: 145, dpc: 7 },
  { name: "PSA (Prostate Screening)", hospital: 185, dpc: 15 },
  { name: "Strep Throat (Rapid)", hospital: 95, dpc: 0 }, // Often included free
  { name: "Hemoglobin A1C", hospital: 173, dpc: 8 },
  { name: "Basic Metabolic Panel (BMP)", hospital: 130, dpc: 6 },
  { name: "Urinalysis", hospital: 80, dpc: 4 },
  { name: "Liver Function Panel", hospital: 165, dpc: 9 },
  { name: "Thyroid Panel (Complete)", hospital: 220, dpc: 15 },
  { name: "Testosterone (Total)", hospital: 195, dpc: 12 },
  { name: "B12 (Vitamin B12)", hospital: 150, dpc: 10 },
  { name: "Folate", hospital: 140, dpc: 8 },
  { name: "Iron Panel", hospital: 175, dpc: 11 },
  { name: "Ferritin", hospital: 160, dpc: 9 },
  { name: "C-Reactive Protein (CRP)", hospital: 145, dpc: 8 },
  { name: "Homocysteine", hospital: 180, dpc: 12 },
  { name: "Lipid Panel (Extended)", hospital: 200, dpc: 10 },
  { name: "HbA1c (Glycated Hemoglobin)", hospital: 173, dpc: 8 },
  { name: "Glucose (Fasting)", hospital: 85, dpc: 5 },
  { name: "Creatinine", hospital: 75, dpc: 4 },
  { name: "BUN (Blood Urea Nitrogen)", hospital: 70, dpc: 4 },
  { name: "Electrolyte Panel", hospital: 120, dpc: 6 },
  { name: "Magnesium", hospital: 95, dpc: 6 },
  { name: "Phosphorus", hospital: 90, dpc: 5 },
  { name: "Calcium", hospital: 85, dpc: 5 },
  { name: "Albumin", hospital: 80, dpc: 4 },
  { name: "Total Protein", hospital: 75, dpc: 4 },
  { name: "Bilirubin (Total)", hospital: 100, dpc: 6 },
  { name: "ALT (Alanine Aminotransferase)", hospital: 110, dpc: 7 },
  { name: "AST (Aspartate Aminotransferase)", hospital: 110, dpc: 7 },
  { name: "Alkaline Phosphatase", hospital: 105, dpc: 6 },
  { name: "GGT (Gamma-Glutamyl Transferase)", hospital: 125, dpc: 8 },
  { name: "LDH (Lactate Dehydrogenase)", hospital: 135, dpc: 8 },
  { name: "Troponin", hospital: 250, dpc: 20 },
  { name: "BNP (Brain Natriuretic Peptide)", hospital: 280, dpc: 22 },
  { name: "ProBNP", hospital: 300, dpc: 25 },
  { name: "D-Dimer", hospital: 195, dpc: 15 },
  { name: "PT/INR (Prothrombin Time)", hospital: 125, dpc: 8 },
  { name: "PTT (Partial Thromboplastin Time)", hospital: 130, dpc: 8 },
  { name: "Fibrinogen", hospital: 140, dpc: 9 },
  { name: "Cortisol (AM)", hospital: 165, dpc: 11 },
  { name: "Cortisol (PM)", hospital: 165, dpc: 11 },
  { name: "ACTH", hospital: 220, dpc: 18 },
  { name: "Insulin (Fasting)", hospital: 185, dpc: 14 },
  { name: "C-Peptide", hospital: 200, dpc: 16 },
  { name: "HbA1c with eAG", hospital: 180, dpc: 9 },
  { name: "Microalbumin", hospital: 95, dpc: 6 },
  { name: "Creatinine Clearance", hospital: 150, dpc: 10 },
];

/**
 * Calculate percentage savings compared to hospital pricing
 */
export function calculateSavings(hospital: number, dpc: number): number {
  if (dpc === 0) return 100; // Free = 100% savings
  return Math.round(((hospital - dpc) / hospital) * 100);
}
