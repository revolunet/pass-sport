import { ContactRequestBody } from '../../../../types/Contact';

export const postContact = async (request: FormData): Promise<Response> => {
  const body: ContactRequestBody = {
    email: request.get('email'),
    firstname: request.get('firstname'),
    lastname: request.get('lastname'),
    message: request.get('message'),
    reason: request.get('reason'),
  };
  return fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) });
};
