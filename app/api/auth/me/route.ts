import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface DecodedToken {
  userId: string;
  email: string;
  role: string;
  name: string;
}

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie');
  const token = cookieHeader
    ?.split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith('token='))
    ?.split('=')[1];

  if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    return NextResponse.json(
      {
        user: {
          id: decoded.userId,
          email: decoded.email,
          role: decoded.role,
          name: decoded.name,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
