import { NextResponse } from "next/server";
import app, { db } from "@/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get('id');
  const querySnapshot = await getDocs(collection(db, "user"));
  const docs =[]
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    docs.push(doc.data());
  });
  
  const product = { data: "fdlfkjhdsaf lkjjh" };

  return NextResponse.json({ docs });
}
