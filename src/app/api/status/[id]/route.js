import mongoDB, { collectionNames } from "@/lib/mongoDB";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
    const { id } = await params;
    const statusInfo = await req.json();
    // console.log(statusInfo);
    const taskCollection = mongoDB(collectionNames.taskCollection);
    const query = { _id: new ObjectId(id) };
    const updateData = {
        $set: { ...statusInfo }
    }
    const patchResult = await taskCollection.updateOne(query, updateData);
    revalidatePath("/manage-tasks");
    return NextResponse.json(patchResult);
}