
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import { fetchNoteByIdServer } from '@/lib/api/serverApi';
import NotePreviewClient from './NotePreview.client';

type Props = { params: { id: string } };

export default async function InterceptedNotePage({ params }: Props) {
  const { id } = params;

  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteByIdServer(id),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NotePreviewClient id={id} />
    </HydrationBoundary>
  );
}
