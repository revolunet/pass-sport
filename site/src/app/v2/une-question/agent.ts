export const postContact = async (payload: {
  email: string;
  firstname: string;
  lastname: string;
  message: string;
  reason: string;
}): Promise<Response> => fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) });
