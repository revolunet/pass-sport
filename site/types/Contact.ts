type InputState = 'default' | 'success' | 'error';

export interface InputsState {
  firstname: InputState;
  lastname: InputState;
  email: InputState;
  reason: InputState;
  message: InputState;
  consent: InputState;
}

export interface ContactRequestBody {
  email: string;
  firstname: string;
  lastname: string;
  message: string;
  reason: string;
}
