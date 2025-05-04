// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create seed data
  const companies = [
    {
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      email: "info@techcorp.com",
      name: "TechCorp Solutions",
      businessStatus: "OPERATIONAL",
      formattedAddress: "123 Tech Avenue, San Francisco, CA 94107",
      latitude: 37.7749,
      longitude: -122.4194,
      rating: 4.7,
      phone: "+14155550100",
      website: "https://techcorp.example.com",
      types: ["technology", "software", "consulting"],
    },
    {
      placeId: "ChIJP3Sa8ziYEmsRUKgyFmh9AQM",
      email: "contact@coffeeshop.com",
      name: "Artisan Coffee House",
      businessStatus: "OPERATIONAL",
      formattedAddress: "456 Brew Street, Seattle, WA 98101",
      latitude: 47.6062,
      longitude: -122.3321,
      rating: 4.5,
      phone: "+12065551234",
      website: "https://artisancoffee.example.com",
      types: ["cafe", "food", "coffee"],
    },
    {
      placeId: "ChIJW-T2Wt7Gt4kRKl2I1CJFUsI",
      email: "hello@citygym.com",
      name: "City Fitness Center",
      businessStatus: "OPERATIONAL",
      formattedAddress: "789 Workout Drive, Chicago, IL 60601",
      latitude: 41.8781,
      longitude: -87.6298,
      rating: 4.3,
      phone: "+13125556789",
      website: "https://cityfitness.example.com",
      types: ["gym", "fitness", "health"],
    },
  ];

  // Insert the companies
  for (const company of companies) {
    await prisma.company.create({
      data: company,
    });
  }

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
