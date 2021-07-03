export const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
export const isEmailValid = (email) => EMAIL_REGEX.test(email);
export const arePasswordsValid = (
  password,
  confirmPassword,
  { allowEmpty = false } = {}
) => password === confirmPassword && (allowEmpty || password.length > 0);
