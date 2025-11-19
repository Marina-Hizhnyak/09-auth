
'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { getMe, updateMe } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';

import css from './EditProfilePage.module.css';

export default function EditProfilePage() {
  const router = useRouter();
  const { user, setUser } = useAuthStore();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    let ignore = false;

    const loadUser = async () => {
      try {
        setIsLoading(true);
        setError(null);

    
        let currentUser = user;
        if (!currentUser) {
          currentUser = await getMe();
          setUser(currentUser);
        }

        if (!ignore && currentUser) {
          setUsername(currentUser.username ?? ''); 
          setEmail(currentUser.email ?? '');
          setAvatar(
            currentUser.avatar ?? 'https://ac.goit.global/img/user-avatar-placeholder.jpg',
          );
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load profile data.');
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      ignore = true;
    };
  }, [user, setUser]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      setIsSaving(true);
      const updatedUser = await updateMe({ username });
      setUser(updatedUser); 
      router.push('/profile'); 
    } catch (err) {
      console.error(err);
      setError('Failed to update profile.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    router.push('/profile');
  };

  if (isLoading) {
    return (
      <main className={css.mainContent}>
        <div className={css.profileCard}>
          <p>Loading profile...</p>
        </div>
      </main>
    );
  }

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <Image
          src={avatar || 'https://ac.goit.global/img/user-avatar-placeholder.jpg'}
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />

        <form className={css.profileInfo} onSubmit={handleSubmit}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              className={css.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <p>Email: {email}</p>

          {error && <p className={css.error}>{error}</p>}

          <div className={css.actions}>
            <button
              type="submit"
              className={css.saveButton}
              disabled={isSaving}
            >
              {isSaving ? 'Saving…' : 'Save'}
            </button>
            <button
              type="button"
              className={css.cancelButton}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
