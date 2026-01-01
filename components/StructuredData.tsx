export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Direct Care Indy",
    "description": "Direct Primary Care practice in Indianapolis providing affordable, transparent healthcare with no insurance hassles.",
    "url": "https://directcareindy.com",
    "logo": "https://directcareindy.com/logo.png",
    "image": "https://directcareindy.com/og-image.jpg",
    "telephone": "+1-317-956-6288",
    "email": "info@directcareindy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7911 N. Michigan Rd.",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "46268",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.9186",
      "longitude": "-86.1836"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$69-$250",
    "areaServed": {
      "@type": "City",
      "name": "Indianapolis"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

export function PhysicianSchema() {
  const physicianData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "James D. Pike",
    "honorificSuffix": "D.O., FCCP, FACP",
    "jobTitle": "Direct Primary Care Physician",
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Direct Care Indy"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7911 N. Michigan Rd.",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "46268",
      "addressCountry": "US"
    },
    "medicalSpecialty": [
      "Internal Medicine",
      "Pulmonary Medicine",
      "Primary Care"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "American College of Chest Physicians"
      },
      {
        "@type": "Organization",
        "name": "American College of Physicians"
      }
    ],
    "alumniOf": "Osteopathic Medical School",
    "description": "Board-certified physician specializing in Internal Medicine and Pulmonary Medicine, providing Direct Primary Care services in Indianapolis."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianData) }}
    />
  );
}

export function ServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direct Primary Care Membership",
    "description": "Monthly membership providing unlimited primary care visits, direct physician access, and wholesale lab pricing with no insurance hassles.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Direct Care Indy"
    },
    "areaServed": {
      "@type": "City",
      "name": "Indianapolis"
    },
    "serviceType": [
      "Direct Primary Care",
      "Chronic Disease Management",
      "Preventive Care",
      "Wholesale Laboratory Services"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Individual Membership",
        "price": "69",
        "priceCurrency": "USD",
        "description": "Individual Direct Primary Care membership with unlimited visits"
      },
      {
        "@type": "Offer",
        "name": "Family Membership",
        "price": "250",
        "priceCurrency": "USD",
        "description": "Family Direct Primary Care membership with unlimited visits for entire household"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}
