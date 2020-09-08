export interface IProps {
  dispatch: any,
  error: string
}

export interface ILogin {
  email: string,
  password: string
};

export interface IRegister {
  email: string,
  password: string,
  password_confirmation: string
};
