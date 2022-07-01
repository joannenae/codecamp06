export interface IFromValues {
  email?: string;
  password?: string;
  name?: string;
  passwordCheck?: string;
}
export interface ISignupProps {
  register: any;
  handleSubmit: any;
  formState: any;
  onClickSingup: (data: IFromValues) => void;
  onClickGoLogin: () => void;
  onClickCancle: () => void;
}
