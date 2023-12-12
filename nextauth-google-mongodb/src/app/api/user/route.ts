import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { NextApiRequest } from "next"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const { name, email } = await request.json()
    await connectMongoDB()

    await User.create({name, email})
    return NextResponse.json({message:"User Register"}, {status: 201})
}