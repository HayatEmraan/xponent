import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req, res) {
 console.log(await req.json())
  try {
    const categoryPosts = await prisma.categories.create({

       data : await req.json()
       
      
    });
    return NextResponse.json({
      msg: "success",
      data: categoryPosts,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}

