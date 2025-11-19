
'use client';

import { api } from './api';
import type { Note } from '@/types/note';
import type { NoteTag } from '@/types/note';
import type { User } from '@/types/user';

// ==== Нотатки ====

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

export async function fetchNotes(
  params: FetchNotesParams,
): Promise<FetchNotesResponse> {
  const { data } = await api.get<FetchNotesResponse>('/notes', {
    params,
  });
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
}

export interface CreateNoteDto {
  title: string;
  content: string;
  tag: NoteTag;
}

export async function createNote(note: CreateNoteDto): Promise<Note> {
  const { data } = await api.post<Note>('/notes', note);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
}

// ==== Auth ====

interface RegisterDto {
  email: string;
  password: string;
}

interface LoginDto {
  email: string;
  password: string;
}

export async function register(body: RegisterDto): Promise<User> {
  const { data } = await api.post<User>('/auth/register', body);
  return data;
}

export async function login(body: LoginDto): Promise<User> {
  const { data } = await api.post<User>('/auth/login', body);
  return data;
}

export async function logout(): Promise<void> {
  await api.post('/auth/logout');
}

export async function checkSession(): Promise<User | null> {
  const { data } = await api.get<User | null>('/auth/session');
  return data ?? null;
}

// ==== User profile ====

export async function getMe(): Promise<User> {
  const { data } = await api.get<User>('/users/me');
  return data;
}

interface UpdateMeDto {
  username?: string;
}

export async function updateMe(body: UpdateMeDto): Promise<User> {
  const { data } = await api.patch<User>('/users/me', body);
  return data;
}
