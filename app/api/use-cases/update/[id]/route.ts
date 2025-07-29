// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import prisma from '@/lib/prisma';

// const JWT_SECRET = process.env.JWT_SECRET as string;

// interface DecodedToken {
//   userId: string;
//   email: string;
// }

// interface UseCaseData {
//   illustration?: string;
//   name?: string;
//   link?: string;
//   description?: string;
// }

// export async function PUT(
//   request: Request,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     // 1. Authentication
//     const cookieHeader = request.headers.get('cookie');
//     const token = cookieHeader
//       ?.split(';')
//       .find((cookie) => cookie.trim().startsWith('token='))
//       ?.split('=')[1];

//     if (!token) {
//       return NextResponse.json(
//         { message: 'Authentication required' },
//         { status: 401 },
//       );
//     }

//     // 2. Token Verification
//     const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

//     // 3. User Validation
//     const user = await prisma.user.findUnique({
//       where: { email: decoded.email },
//       select: { id: true },
//     });

//     if (!user) {
//       return NextResponse.json(
//         { message: 'Invalid user credentials' },
//         { status: 401 },
//       );
//     }

//     // 4. Request Body Validation
//     const body: UseCaseData = await request.json();

//     if (!body || Object.keys(body).length === 0) {
//       return NextResponse.json(
//         { message: 'No data provided for update' },
//         { status: 400 },
//       );
//     }

//     // 5. Check if use case exists
//     const existingUseCase = await prisma.useCas.findUnique({
//       where: { id: params.id },
//     });

//     if (!existingUseCase) {
//       return NextResponse.json(
//         { message: 'Use case not found' },
//         { status: 404 },
//       );
//     }

//     // 6. Update use case
//     const updatedUseCase = await prisma.useCas.update({
//       where: { id: params.id },
//       data: {
//         illustration: body.illustration ?? existingUseCase.illustration,
//         name: body.name ?? existingUseCase.name,
//         link: body.link ?? existingUseCase.link,
//         description: body.description ?? existingUseCase.description,
//       },
//     });

//     // 7. Return success response
//     return NextResponse.json(
//       {
//         success: true,
//         message: 'Use case updated successfully',
//         data: updatedUseCase,
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error('Error in PUT /api/usecases/[id]:', error);

//     // Handle JWT specific errors
//     if (error instanceof jwt.JsonWebTokenError) {
//       return NextResponse.json(
//         { message: 'Invalid or expired token' },
//         { status: 401 },
//       );
//     }

//     // Handle Prisma errors
//     if (error instanceof Error && error.message.includes('RecordNotFound')) {
//       return NextResponse.json(
//         { message: 'Use case not found' },
//         { status: 404 },
//       );
//     }

//     // Generic error response
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'An error occurred while updating the use case',
//         error:
//           process.env.NODE_ENV === 'development' && error instanceof Error
//             ? error.message
//             : undefined,
//       },
//       { status: 500 },
//     );
//   }
// }
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET as string;

interface DecodedToken {
  userId: string;
  email: string;
}

export async function PUT(
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
      where: { email: decoded.email },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 },
      );
    }

    const existingUseCase = await prisma.useCas.findUnique({
      where: { id: id },
    });

    const body = await request.json();
    const updatedUseCase = await prisma.useCas.update({
      where: { id: id },
      data: body,
    });

    return NextResponse.json({ useCase: updatedUseCase }, { status: 200 });
  } catch (error) {
    console.error('Error updating use case:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
