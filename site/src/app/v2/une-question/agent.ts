import { ContactRequestBody } from '../../../../types/Contact';

export const postContact = async (request: FormData): Promise<Response> => {
  // type casting because at this point no value are null
  const body: ContactRequestBody = {
    email: request.get('email') as string,
    firstname: request.get('firstname') as string,
    lastname: request.get('lastname') as string,
    message: request.get('message') as string,
    reason: request.get('reason') as string,
  };
  return fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) });
};
