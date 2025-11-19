
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_ROUTES = ['/sign-in', '/sign-up'];
const PRIVATE_PREFIXES = ['/profile', '/notes'];

function isPrivateRoute(pathname: string) {
  return PRIVATE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }


  const accessToken = request.cookies.get('accessToken')?.value;
  const isAuthenticated = Boolean(accessToken);


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
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
