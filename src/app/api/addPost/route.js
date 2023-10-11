import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req, res) {
  console.log( "adlkj",await req.json())
  try {
    const newPosts = await prisma.posts.create({
       data : await req.json()
      
    });
    return NextResponse.json({
      msg: "success",
      data: newPosts, 
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}

