import { getDocs, query, where } from "firebase/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { Result } from "../pages/SearchPage";

const isDuplicate = (newDocument: Result, documents: Result[]) => {
  return documents.some((doc) => {
    doc.description === newDocument.description;
  });
};

const getDataByDescription = async (searchValue: string[], tag: string) => {
  const db = getFirestore();
  const resultsCollection = collection(db, "results");
  const documents: Result[] = [];
  for (const element of searchValue) {
    const q = query(
      resultsCollection,
      where("searchableDescription", "array-contains", element.toLowerCase())
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const newDocument = {
        id: doc.id,
        url: data.url,
        title: data.title,
        name: data.name,
        description: data.description,
        image: data.image,
        tags: data.tags,
      };

      if (isDuplicate(newDocument, documents)) return;

      for (const docTag of newDocument.tags) {
        if (docTag === tag) {
          documents.push(newDocument);
        }
      }
    });
  }
  return documents;
};

export default getDataByDescription;
