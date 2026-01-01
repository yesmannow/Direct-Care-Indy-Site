import { NextResponse } from 'next/server';

// Mock data structure - Replace with actual Turquoise/Serif API calls when keys are available
interface MarketCostData {
  service: string;
  cptCode?: string;
  hospitalPPO: number;
  marketMedian: number;
  dpcRate: number;
  savings: number;
  savingsPercent: number;
}

// Mock data for Indianapolis market - Replace with API calls
const mockMarketData: MarketCostData[] = [
  {
    service: "MRI (Brain)",
    cptCode: "70551",
    hospitalPPO: 1200,
    marketMedian: 1100,
    dpcRate: 400,
    savings: 800,
    savingsPercent: 67
  },
  {
    service: "Lipid Panel",
    cptCode: "80061",
    hospitalPPO: 90,
    marketMedian: 85,
    dpcRate: 5,
    savings: 85,
    savingsPercent: 94
  },
  {
    service: "Hemoglobin A1C",
    cptCode: "83036",
    hospitalPPO: 65,
    marketMedian: 60,
    dpcRate: 3,
    savings: 62,
    savingsPercent: 95
  },
  {
    service: "Complete Blood Count (CBC)",
    cptCode: "85025",
    hospitalPPO: 45,
    marketMedian: 42,
    dpcRate: 3,
    savings: 42,
    savingsPercent: 93
  },
  {
    service: "Comprehensive Metabolic Panel",
    cptCode: "80053",
    hospitalPPO: 75,
    marketMedian: 70,
    dpcRate: 5,
    savings: 70,
    savingsPercent: 93
  }
];

export async function GET(req: Request) {
  try {
    // TODO: When Turquoise Health API key is available:
    // const turquoiseResponse = await fetch('https://api.turquoise.health/v1/...', {
    //   headers: { 'Authorization': `Bearer ${process.env.TURQUOISE_API_KEY}` }
    // });

    // TODO: When Serif Health API key is available:
    // const serifResponse = await fetch('https://api.serifhealth.com/v1/...', {
    //   headers: { 'Authorization': `Bearer ${process.env.SERIF_API_KEY}` }
    // });

    // For now, return mock data
    return NextResponse.json({
      data: mockMarketData,
      source: "Market estimates (mock data - API integration pending)",
      location: "Indianapolis, IN"
    });
  } catch (error) {
    console.error('Market cost API error:', error);
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 });
  }
}

