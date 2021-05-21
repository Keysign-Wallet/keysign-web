export interface InputsType {
  accountNumber: string;
  signingKey: string;
  [key: string]: string;
}

export type LoginFormType = {
  loginHandler: (values: InputsType) => void;
  loading: boolean;
  initialValues: InputsType;
};
