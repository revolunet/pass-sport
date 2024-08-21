'use client';

import { ContactRequestBody } from '../../../../types/Contact';

export const postContact = async (request: FormData, isProRequest: boolean): Promise<Response> => {
  // type casting because at this point no value are null
  const body: ContactRequestBody = {
    email: request.get('email') as string,
    firstname: request.get('firstname') as string,
    lastname: request.get('lastname') as string,
    message: request.get('message') as string,
    reason: request.get('reason') as string,
    isProRequest,
  };

  return fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) });
};
