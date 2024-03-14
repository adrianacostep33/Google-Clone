import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

export const seedFirestore = async () => {
  try {
    const websites = [
      {
        description:
          "Amazon - Online shopping for electronics, apparel, computers, books, DVDs & more",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71B14eyYb0L._SX425_.jpg",
        lowercaseTitle: "amazon.com: online shopping",
        name: "Amazon",
        tags: ["all"],
        title: "Amazon",
        url: "https://www.amazon.com",
      },
      {
        description: "Amazon News - Latest updates and news about Amazon",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41ViVsuqg1L._SX425_.jpg",
        lowercaseTitle: "amazon.com: news",
        name: "Amazon News",
        tags: ["news"],
        title: "Amazon News",
        url: "https://www.amazon.com/news",
      },
      {
        description:
          "Amazon Shopping - Your one-stop destination for shopping online",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41k7kheVfLL._SX425_.jpg",
        lowercaseTitle: "amazon.com: shopping",
        name: "Amazon Shopping",
        tags: ["shopping"],
        title: "Amazon Shopping",
        url: "https://www.amazon.com/shopping",
      },
      {
        description:
          "Amazon Images - Explore images of products available on Amazon",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51pVEdWZw7L._SX425_.jpg",
        lowercaseTitle: "amazon.com: images",
        name: "Amazon Images",
        tags: ["images"],
        title: "Amazon Images",
        url: "https://www.amazon.com/images",
      },
      {
        description:
          "Amazon Maps - Discover locations and services offered by Amazon",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41Pty7LJ14L._SX425_.jpg",
        lowercaseTitle: "amazon.com: maps",
        name: "Amazon Maps",
        tags: ["maps"],
        title: "Amazon Maps",
        url: "https://www.amazon.com/maps",
      },
      {
        description:
          "Amazon More - Explore additional features and services provided by Amazon",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41UoHTUDqVL._SX425_.jpg",
        lowercaseTitle: "amazon.com: more",
        name: "Amazon More",
        tags: ["more"],
        title: "Amazon More",
        url: "https://www.amazon.com/more",
      },
    ];

    // Loop through each mock website and add it to Firestore
    for (const website of websites) {
      await addDoc(collection(db, "results"), website);
    }

    console.log("Firestore database seeded successfully!");
  } catch (error) {
    console.error("Error seeding Firestore database:", error);
  }
};

seedFirestore();
