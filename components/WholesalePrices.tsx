"use client";

import { useState } from "react";
import { Search, Pill, FlaskConical } from "lucide-react";

interface PriceItem {
  name: string;
  category: "medication" | "lab";
  price: number;
  retailPrice: number;
}

export default function WholesalePrices() {
  const [searchTerm, setSearchTerm] = useState("");

  const priceList: PriceItem[] = [
    // Medications
    { name: "Amoxicillin", category: "medication", price: 3.0, retailPrice: 25 },
    { name: "Azithromycin (Z-Pack)", category: "medication", price: 5.0, retailPrice: 40 },
    { name: "Lisinopril", category: "medication", price: 3.5, retailPrice: 20 },
    { name: "Metformin", category: "medication", price: 4.0, retailPrice: 30 },
    { name: "Atorvastatin", category: "medication", price: 5.0, retailPrice: 35 },
    { name: "Omeprazole", category: "medication", price: 3.0, retailPrice: 25 },
    { name: "Albuterol Inhaler", category: "medication", price: 8.0, retailPrice: 60 },
    
    // Labs
    { name: "Lipid Panel", category: "lab", price: 5.0, retailPrice: 150 },
    { name: "A1C Test", category: "lab", price: 8.0, retailPrice: 120 },
    { name: "Comprehensive Metabolic Panel", category: "lab", price: 7.0, retailPrice: 180 },
    { name: "Complete Blood Count (CBC)", category: "lab", price: 6.0, retailPrice: 100 },
    { name: "Thyroid Panel (TSH)", category: "lab", price: 9.0, retailPrice: 140 },
    { name: "Vitamin D Test", category: "lab", price: 12.0, retailPrice: 160 },
    { name: "Urinalysis", category: "lab", price: 4.0, retailPrice: 80 },
  ];

  const filteredItems = priceList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h4 className="text-2xl font-bold text-primary mb-6 text-center">
        Wholesale Pharmacy & Lab Pricing
      </h4>

      <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
        As a Direct Care Indy member, you get access to medications and lab work
        at true wholesale prices—no insurance markups or hidden fees.
      </p>

      {/* Search Bar */}
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search medications or lab tests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
          />
        </div>
      </div>

      {/* Price Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-4 py-3 text-left">Item</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-right">Retail Price</th>
              <th className="px-4 py-3 text-right">DPC Price</th>
              <th className="px-4 py-3 text-right">You Save</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, idx) => {
              const savings = item.retailPrice - item.price;
              const savingsPercent = Math.round(
                (savings / item.retailPrice) * 100
              );
              return (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        item.category === "medication"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {item.category === "medication" ? (
                        <Pill className="w-3 h-3" />
                      ) : (
                        <FlaskConical className="w-3 h-3" />
                      )}
                      {item.category === "medication" ? "Medication" : "Lab"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500 line-through">
                    ${item.retailPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-green-600 font-semibold">
                      ${savings.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500 block">
                      ({savingsPercent}% off)
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No items found matching &quot;{searchTerm}&quot;
        </div>
      )}

      <div className="mt-6 p-4 bg-secondary bg-opacity-10 rounded-lg">
        <p className="text-sm text-gray-700 text-center">
          <strong>Note:</strong> Prices shown are examples and may vary. All
          pricing is transparent and provided upfront—no surprise bills.
        </p>
      </div>
    </div>
  );
}
