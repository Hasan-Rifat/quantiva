import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET as string;

interface DecodedToken {
  userId: string;
  email: string;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
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

    const user = await prisma.user.findUnique({
      where: {
        email: decoded.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 },
      );
    }

    const useCase = await prisma.useCas.findUnique({
      where: { id: id },
    });

    return NextResponse.json(
      {
        useCase,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error('Error fetching reports:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
