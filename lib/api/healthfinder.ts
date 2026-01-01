import 'server-only'; // Ensure this only runs on the server

export interface ScreeningItem {
  Type: string;
  Title: string;
  Description: string;
  Url: string;
}

export async function getSeniorScreenings(age: number, sex: 'male' | 'female'): Promise<ScreeningItem[]> {
  // ODPHP API Endpoint for preventive services
  const baseUrl = "https://odphp.health.gov/myhealthfinder/api/v4/myhealthfinder.json";
  const params = new URLSearchParams({
    age: age.toString(),
    sex: sex,
    pregnant: 'no',
    tobaccoUse: 'no',
    sexuallyActive: 'yes'
  });

  try {
    const response = await fetch(`${baseUrl}?${params.toString()}`, {
      next: { revalidate: 86400 } // Cache results for 24 hours
    });

    if (!response.ok) throw new Error("Failed to fetch MyHealthfinder data");

    const data = await response.json();

    // Parse the Result.Resources.All category for specific DPC-relevant screenings
    return data.Result.Resources.All.map((item: any) => ({
      Type: item.Type,
      Title: item.Title,
      Description: item.Description,
      Url: item.AccessibleVersion
    }));
  } catch (error) {
    console.error("Healthfinder API Error:", error);
    return [];
  }
}

