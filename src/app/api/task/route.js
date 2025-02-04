import mongoDB, { collectionNames } from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const taskCollection = mongoDB(collectionNames.taskCollection);
    const findTasks = await taskCollection.find({}).toArray();
    return NextResponse.json(findTasks);
}

export const POST = async (req) => {
    const body = await req.json();
    // console.log(body);
    const taskCollection = mongoDB(collectionNames.taskCollection);
    const insertResult = await taskCollection.insertOne(body);
    return NextResponse.json(insertResult);
}