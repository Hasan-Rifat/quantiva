import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface DecodedToken {
  userId: string;
  email: string;
}

export async function POST(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');
    const token = cookieHeader
      ?.split(';')
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith('token='))
      ?.split('=')[1];

    if (!token) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 },
      );
    }

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    const { name, reportType, date, url } = await request.json();

    if (!name || !reportType || !date || !url) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 },
      );
    }

    const report = await prisma.report.create({
      data: {
        name,
        reportType,
        date: new Date(date),
        url,
        userId: decoded.userId,
      },
    });

    return NextResponse.json(
      { message: 'Report created', report },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error creating report:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
