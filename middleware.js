import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('adminToken');
  const path = request.nextUrl.pathname;

  // Public routes
  const publicRoutes = ['/login', '/register'];
  
  // Protected routes
  const protectedRoutes = [
    '/dashboard',
    '/dashboard/addblog',
    '/dashboard/allblogs',
    '/dashboard/contactdetail',
    '/dashboard/contactform',
    '/dashboard/projectdetail',
    '/dashboard/projectform',
    '/dashboard/propertydetail',
    '/dashboard/propertyform'
  ];

  // Redirect to login if accessing protected routes without token
  if (protectedRoutes.includes(path) || path === '/dashboard') {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect to dashboard if user is already logged in and tries to access login/register
  if (publicRoutes.includes(path) && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Configure middleware to run on specific paths
export const config = {
  matcher: [
    '/login',
    '/register',
    '/dashboard',
    '/dashboard/:path*'
  ],
};