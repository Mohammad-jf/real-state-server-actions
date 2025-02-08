"use server";
import connectDB from "@/utils/connectDB";


async function getProfiles() {
  await connectDB();
}

export default getProfiles;
