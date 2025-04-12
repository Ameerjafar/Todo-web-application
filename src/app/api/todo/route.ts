import { PrismaClient } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server'

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const id = parseInt(req.nextUrl.searchParams.get("id")!);
    if (id) {
        const response = await prisma.todo.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json({ message: response })
    }
    else {
        const response = await prisma.todo.findMany({});
        return NextResponse.json({ message: response })
    }
}

export async function POST(req: NextRequest) {
    const request = await req.json();
    const response = await prisma.todo.create({
        data: {
            title: request.title,
            date: request.date,
            isCompleted: request.isCompleted
        }
    })
    console.log(response);
    return NextResponse.json({ message: response });
}
export async function PUT(req: NextRequest) {
    const request = await req.json();
    const response = await prisma.todo.update({
        where: {
            id: request.id
        },
        data: {
            title: request.title,
            date: request.date,
            isCompleted: request.isCompleted
        }
    })
    console.log(response);
    return NextResponse.json({ message: "update the data successfully" });
}


export async function DELETE(req: NextRequest) {
    const paramId = parseInt(req.nextUrl.searchParams.get("todoId")!);
    console.log(paramId)
    const response = await prisma.todo.delete({
        where: {
            id: paramId
        }
    })
    if (!response) {
        return NextResponse.json({ message: "we cannot delete this record because of the Id" });
    }
    console.log(response);
    return NextResponse.json({ message: "The Entry was deleted successfully" })
}

