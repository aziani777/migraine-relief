
export const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

export const sanitizeFormData = (data: { name?: string; email?: string; message?: string }) => {
  return {
    name: sanitizeInput(data.name || ''),
    email: sanitizeInput(data.email || ''),
    message: sanitizeInput(data.message || '')
  };
};
