import { Todo } from "@/app/Models/Todo";
import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const todos = await Todo.find().sort({ createdAt: -1 });
    return NextResponse.json({
      message: "MongoDB connected",
      todo: todos,
    });
  } catch (error) {
    console.error("during fetching error happened", error);
     return NextResponse.json(
      {
        message: "internal server error",
        todo: [],
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { title, completed } = await req.json();
    if (!title || !completed) {
      return NextResponse.json({
        message: "please fill the field of todos",
        status: 400,
      });
    }
    const todo = await Todo.create({
      title: title,
      completed: completed,
    });
    return NextResponse.json({
      message: "TODO created successfully...",
      status: 201,
      todo: {
        title: todo.title,
        completed: todo.completed,
      },
    });
  } catch (error) {
    console.error("error happened during creating...");
    return NextResponse.json(
      {
        message: "internal server error",
        todo: [],
      },
      { status: 500 },
    );
  }
}
