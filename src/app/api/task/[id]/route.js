import mongoDB, { collectionNames } from "@/lib/mongoDB";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const findData = mongoDB(collectionNames.taskCollection);
    const result = await findData.findOne(query);
    return NextResponse.json(result);
}

export const PATCH = async (req, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const taskCollection = mongoDB(collectionNames.taskCollection);
    
        const body = await req.json();
        const filter = {
            $set: { ...body }
        }

        const option = { upsert: true };
        const updateResult = await taskCollection.updateOne(query, filter, option);

        revalidatePath("/manage-tasks");
        return NextResponse.json(updateResult);
}

export const DELETE = async (req, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const findData = mongoDB(collectionNames.taskCollection);
    const deleteResult = await findData.deleteOne(query);

    if (deleteResult.deletedCount > 0) {
        revalidatePath("/manage-tasks");
        return NextResponse.json(deleteResult);
    } else {
        return NextResponse.json({});
    }
}