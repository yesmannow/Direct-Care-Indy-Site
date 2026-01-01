'use client';

export type UserPersona = 'senior' | 'employer' | 'individual' | null;

const PERSONA_COOKIE_NAME = 'user_persona';
const PERSONA_COOKIE_EXPIRY_DAYS = 30;

export function setUserPersona(persona: UserPersona) {
  if (typeof document === 'undefined') return;

  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + (PERSONA_COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000));

  document.cookie = `${PERSONA_COOKIE_NAME}=${persona}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
}

export function getUserPersona(): UserPersona {
  if (typeof document === 'undefined') return null;

  const cookies = document.cookie.split(';');
  const personaCookie = cookies.find(cookie => cookie.trim().startsWith(`${PERSONA_COOKIE_NAME}=`));

  if (!personaCookie) return null;

  const persona = personaCookie.split('=')[1]?.trim();
  if (persona === 'senior' || persona === 'employer' || persona === 'individual') {
    return persona;
  }

  return null;
}

export function clearUserPersona() {
  if (typeof document === 'undefined') return;
  document.cookie = `${PERSONA_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

