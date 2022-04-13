import { ChangeEvent } from "react";
export interface ILogInPageProps {}
export interface ILogInUIProps {
  isActive: boolean;
  emailError: string;
  passwordError: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogIn: () => void;
}
