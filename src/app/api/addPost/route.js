import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req, res) {
  try {
    const newBlog = await prisma.newBlog.insertOne({
      where: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({
      msg: "success",
      data: newBlog,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}
