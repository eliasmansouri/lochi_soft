import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";

export default async function handler(req: NextRequest, res: NextResponse) {
    // Perform MySQL operations using 'db' connection
    db.query("SELECT * FROM ")

    //res.status(200).json({ message: 'API route for MySQL operations' });
}
