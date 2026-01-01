import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { weight, height, age, gender } = await req.json();
    const apiKey = process.env.RAPIDAPI_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    if (!weight || !height || !age) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const options = {
      method: 'GET',
      url: 'https://fitness-calculator.p.rapidapi.com/bmi',
      params: { age, weight, height },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    };

    const response = await fetch(`${options.url}?age=${age}&weight=${weight}&height=${height}`, {
      headers: options.headers,
      next: { revalidate: 0 } // Don't cache API responses
    });

    if (!response.ok) {
      throw new Error(`RapidAPI error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Wellness calculation error:', error);
    return NextResponse.json({ error: 'Calculation failed' }, { status: 500 });
}

