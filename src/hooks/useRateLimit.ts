
import { useState, useRef } from 'react';

export const useRateLimit = (maxAttempts: number = 3, windowMs: number = 60000) => {
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const windowStart = useRef(Date.now());

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    
    if (now - windowStart.current > windowMs) {
      setAttempts(0);
      setIsBlocked(false);
      windowStart.current = now;
    }

    if (attempts >= maxAttempts) {
      setIsBlocked(true);
      return false;
    }

    setAttempts(prev => prev + 1);
    return true;
  };

  const getRemainingTime = (): number => {
    if (!isBlocked) return 0;
    return Math.max(0, windowMs - (Date.now() - windowStart.current));
  };

  const reset = () => {
    setAttempts(0);
    setIsBlocked(false);
    windowStart.current = Date.now();
  };

  return { checkRateLimit, isBlocked, getRemainingTime, reset };
};
