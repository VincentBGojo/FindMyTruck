export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const CHANGE_VALUES = 'CHANGE_VALUES';
export const changeValues = (key, value) => ({
  type: CHANGE_VALUES,
  key: key,
  value: value,
});
