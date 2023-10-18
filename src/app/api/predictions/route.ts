import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params }: {
    params: { id: number }
}) => {
    const id = request.nextUrl.searchParams.get("id")

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // const data = await res.json()
    return NextResponse.json(id, { status: 200 })
}
