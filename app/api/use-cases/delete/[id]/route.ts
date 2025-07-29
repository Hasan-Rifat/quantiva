// import { NextResponse, NextRequest } from 'next/server';
// const JWT_SECRET = process.env.JWT_SECRET as string;
// import jwt from 'jsonwebtoken';
// import prisma from '@/lib/prisma';

// interface DecodedToken {
//   userId: string;
//   email: string;
// }

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     const cookieHeader = request.headers.get('cookie');
//     const token = cookieHeader
//       ?.split(';')
//       .map((cookie) => cookie.trim())
//       .find((cookie) => cookie.startsWith('token='))
//       ?.split('=')[1];

//     if (!token) {
//       return NextResponse.json(
//         { message: 'Not authenticated' },
//         { status: 401 },
//       );
//     }

//     const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
//     const user = await prisma.user.findUnique({
//       where: { email: decoded.email },
//     });

//     if (!user) {
//       return NextResponse.json(
//         { message: 'Not authenticated' },
//         { status: 401 },
//       );
//     }

//     await prisma.useCas.delete({
//       where: { id: params.id },
//     });

//     return NextResponse.json(
//       { message: 'Use case deleted successfully' },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error('Error deleting use case:', error);
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 },
//     );
//   }
// }
import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET as string;

interface DecodedToken {
  userId: string;
  email: string;
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // Explicitly type params
  try {
    const id = (await params).id;
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
      where: { email: decoded.email },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 },
      );
    }

    await prisma.useCas.delete({
      where: { id: id }, // id is a string, matching @db.ObjectId
    });

    return NextResponse.json(
      { message: 'Use case deleted successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error deleting use case:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
