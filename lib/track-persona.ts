export type PersonaType = 
  | "small_business_owner"
  | "family_missing_middle"
  | "self_employed_trades"
  | "high_deductible_family"
  | "general";

export interface PersonaEvent {
  persona: PersonaType;
  action: string;
  timestamp: number;
  page: string;
  metadata?: Record<string, unknown>;
}

/**
 * Track a persona-specific event
 * This logs to localStorage for dev and can be connected to Vercel Analytics in production
 */
export function trackPersonaEvent(
  persona: PersonaType,
  action: string,
  metadata?: Record<string, unknown>
): void {
  const event: PersonaEvent = {
    persona,
    action,
    timestamp: Date.now(),
    page: typeof window !== 'undefined' ? window.location.pathname : '',
    metadata
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Persona Event:', event);
  }

  // Store in localStorage for analytics
  if (typeof window !== 'undefined') {
    try {
      const existingEvents = localStorage.getItem('dci_persona_events');
      const events: PersonaEvent[] = existingEvents ? JSON.parse(existingEvents) : [];
      events.push(event);
      
      // Keep only last 100 events to prevent storage issues
      if (events.length > 100) {
        events.shift();
      }
      
      localStorage.setItem('dci_persona_events', JSON.stringify(events));
    } catch (error) {
      console.error('Failed to track persona event:', error);
    }
  }

  // Send to analytics service (Vercel Analytics, Google Analytics, etc.)
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('track', action, { persona, ...metadata });
  }
}

/**
 * Get all persona events from storage
 */
export function getPersonaEvents(): PersonaEvent[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const events = localStorage.getItem('dci_persona_events');
    return events ? JSON.parse(events) : [];
  } catch {
    return [];
  }
}

/**
 * Get analytics summary by persona
 */
export function getPersonaAnalytics(): Record<PersonaType, number> {
  const events = getPersonaEvents();
  const analytics: Record<PersonaType, number> = {
    small_business_owner: 0,
    family_missing_middle: 0,
    self_employed_trades: 0,
    high_deductible_family: 0,
    general: 0
  };

  events.forEach(event => {
    analytics[event.persona] = (analytics[event.persona] || 0) + 1;
  });

  return analytics;
}

/**
 * Clear all persona tracking data
 */
export function clearPersonaEvents(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('dci_persona_events');
  }
}
