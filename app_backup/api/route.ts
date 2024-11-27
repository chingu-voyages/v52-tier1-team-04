

import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json( { message: 'This is the SERVER' })
}
//NOTE; NextResponse replaced res.status().json()