import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params }: {
    params: { id: number }
}) => {

    // const data = await res.json()
    const id = params.id

    try {
        const response = await fetch(
            // "https://api.replicate.com/v1/predictions/" + id,
            "https://api.replicate.com/v1/predictions/y6amcnlbogsfdofkojqgwjjmya",
            {
                headers: {
                    Authorization: `Token `,
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json()
        return NextResponse.json({ data }, { status: 200 })
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 })
    }
}