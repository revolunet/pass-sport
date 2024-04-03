type InputState = 'default' | 'success' | 'error';

export interface InputsState {
  firstname: InputState;
  lastname: InputState;
  email: InputState;
  emailObject: InputState;
  message: InputState;
  consent: InputState;
}
