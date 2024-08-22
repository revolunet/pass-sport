import { InputState } from './form';

export interface InputsState {
  firstname: InputState;
  lastname: InputState;
  email: InputState;
  reason: InputState;
  message: InputState;
  consent: InputState;
  siret: InputState;
}

export interface ContactRequestBody {
  email: string;
  firstname: string;
  lastname: string;
  message: string;
  reason: string;
  isProRequest: boolean;
  siret?: string;
}
