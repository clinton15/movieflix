export const validateFormFields = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  let validEmail = emailRegex.test(email);
  let validPassword = passwordRegex.test(password);

  if (!validEmail) {
    return "Email address is invalid";
  }
  if (!validPassword) {
    return "Password is invalid";
  }

  return null;
};
