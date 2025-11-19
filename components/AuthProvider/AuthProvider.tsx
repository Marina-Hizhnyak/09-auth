
'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { checkSession, logout } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';

import css from './AuthProvider.module.css';

const PRIVATE_PREFIXES = ['/profile', '/notes'];

function isPrivateRoute(pathname: string) {
  return PRIVATE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { setUser, clearIsAuthenticated } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let ignore = false;

    const verifySession = async () => {
      try {
        setIsChecking(true);

        const user = await checkSession();

        if (user) {
          if (!ignore) {
            setUser(user);
          }
        } else {
          if (!ignore) {
            clearIsAuthenticated();
          }

          if (isPrivateRoute(pathname)) {
            try {
              await logout();
            } catch {
            }
            router.push('/sign-in');
          }
        }
      } catch (error) {
        console.error('Session check failed', error);
      } finally {
        if (!ignore) {
          setIsChecking(false);
        }
      }
    };

    verifySession();

    return () => {
      ignore = true;
    };
  }, [pathname, setUser, clearIsAuthenticated, router]);

  if (isChecking && isPrivateRoute(pathname)) {
    return (
      <div className={css.loaderWrapper}>
        <p className={css.loaderText}>Checking authorization…</p>
      </div>
    );
  }

  return <>{children}</>;
}
