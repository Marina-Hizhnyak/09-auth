
import { cookies } from 'next/headers';
import { api } from './api';
import type { Note } from '@/types/note';
import type { NoteTag } from '@/types/note';
import type { User } from '@/types/user';

async function getCookieHeader(): Promise<string | undefined> {

  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();

  if (!allCookies.length) return undefined;

  return allCookies
    .map(
      (c: { name: string; value: string }) =>
        `${encodeURIComponent(c.name)}=${encodeURIComponent(c.value)}`,
    )
    .join('; ');
}

// ==== Нотатки (SSR) ====

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
  tag?: NoteTag;
}

export interface FetchNotesResponse {
  notes: Note[];
  total: number;
}

export async function fetchNotesServer(
  params: FetchNotesParams,
): Promise<FetchNotesResponse> {
  const cookieHeader = await getCookieHeader();

  const { data } = await api.get<FetchNotesResponse>('/notes', {
    params,
    headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
  });

  return data;
}

export async function fetchNoteByIdServer(id: string): Promise<Note> {
  const cookieHeader = await getCookieHeader();

  const { data } = await api.get<Note>(`/notes/${id}`, {
    headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
  });

  return data;
}

// ==== Auth (SSR) ====

export async function checkSessionServer(): Promise<User | null> {
  const cookieHeader = await getCookieHeader();

  const { data } = await api.get<User | null>('/auth/session', {
    headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
  });

  return data ?? null;
}

// ==== User profile (SSR) ====

export async function getMeServer(): Promise<User> {
  const cookieHeader = await getCookieHeader();

  const { data } = await api.get<User>('/users/me', {
    headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
  });

  return data;
}
