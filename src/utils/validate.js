import { t } from "i18next";
export const validateFormFields = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  let validEmail = emailRegex.test(email);
  let validPassword = passwordRegex.test(password);

  if (!validEmail) {
    return t("login.invalidEmail");
  }
  if (!validPassword) {
    return t("login.invalidPassword");
  }

  return null;
};
