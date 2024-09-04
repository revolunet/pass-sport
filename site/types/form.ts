type DsfrInputState = 'default' | 'success' | 'error';

export interface InputState {
  state: DsfrInputState;
  errorMsg?: string;
}
