export interface InputsType {
  accountNumber: string;
  signingKey: string;
  [key: string]: string;
}

export type LoginFormType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: InputsType;
  loginHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading: boolean;
};
