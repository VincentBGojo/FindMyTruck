// Create the case to export it to the middleware
export const LOG_USER = 'LOG_USER';
export const logUser = () => ({
  type: LOG_USER,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key: key,
  value: value,
});

export const TRY_LOGIN = 'TRY_LOGIN';
export const tryLogin = () => ({
  type: TRY_LOGIN,
});

export const LOGIN = 'LOGIN';
export const login = (token) => ({
  type: LOGIN,
  token: token
});


