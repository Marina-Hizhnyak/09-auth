import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkSessionServer } from '@/lib/api/serverApi';

const AUTH_ROUTES = ['/sign-in', '/sign-up'];
const PRIVATE_PREFIXES = ['/profile', '/notes'];

function isPrivateRoute(pathname: string) {
  return PRIVATE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  let isAuthenticated = Boolean(accessToken);


  if (!isAuthenticated && refreshToken) {
    try {
      const response = await checkSessionServer(); 

      if (response.data.success) {
        isAuthenticated = true;
      }
    } catch {
      isAuthenticated = false;
    }
  }


  if (!isAuthenticated && isPrivateRoute(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }


  if (isAuthenticated && AUTH_ROUTES.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/profile';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/notes/:path*', '/sign-in', '/sign-up'],
};
