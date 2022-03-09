export const REGISTER = 'REGISTER';
export const register = () => ({
  type: REGISTER,
});

export const CHANGE_VALUE_REGISTER = 'CHANGE_VALUE_REGISTER';
export const changeValueRegister = (key, value) => ({
  type: CHANGE_VALUE_REGISTER,
  key: key,
  value: value,
});
