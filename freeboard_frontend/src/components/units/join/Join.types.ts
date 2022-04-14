import { ChangeEvent } from "react";
export interface IJoinUIProps {
  isActive: boolean;
  emailError: string;
  nameError: string;
  passwordError: string;
  passwordcheckError: string;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickJoin: () => void;
}
