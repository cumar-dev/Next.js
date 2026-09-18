import { Todo } from "@/app/Models/Todo";
import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;
    const todos = await Todo.findById(id);
    return NextResponse.json({
      message: "todo by id fetched successfully...",
      status: 200,
      todos,
    });
  } catch (error) {
    console.error("error", error);
    return NextResponse.json(
      {
        message: "internal server error",
        todo: [],
      },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const { title, completed } = await req.json();

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true, runValidators: true },
    );

    if (!updatedTodo) {
      return NextResponse.json(
        {
          message: "Todo not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "TODO updated successfully...",
      todo: {
        title: updatedTodo.title,
        completed: updatedTodo.completed,
      },
    });
  } catch (error) {
    console.error("error", error);

    return NextResponse.json(
      {
        message: "internal server error",
      },
      { status: 500 },
    );
  }
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Todo deleted successfully",
      todo: deletedTodo,
    });
  } catch (error) {
    console.error("Error deleting todo:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
