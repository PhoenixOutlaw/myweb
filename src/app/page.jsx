import MainPage from "@/screens";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

export default async function Page() {
  const data = await getServerSideProps()
  return <MainPage {...data[0]} />;
}

export const getServerSideProps = async () => {
  const querySnapshot = await getDocs(collection(db, "user"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    docs.push(doc.data());
  });

  return docs;
};
