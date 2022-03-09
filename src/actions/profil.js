export const TYPE_VALUES = 'TYPE_VALUES';
export const typeValues = (key, value) => ({
  type: TYPE_VALUES,
  key: key,
  value: value,
});

export const UPDATE_INFORMATIONS = 'UPDATE_INFORMATIONS';
export const updateInformations = () => ({
  type: UPDATE_INFORMATIONS,
});

export const SHOW_MODIFY_INFORMATIONS = 'SHOW_MODIFY_INFORMATIONS';
export const showModifyInformations = () => ({
  type: SHOW_MODIFY_INFORMATIONS,
});

export const HIDE_MODIFY_INFORMATIONS = 'HIDE_MODIFY_INFORMATIONS';
export const hideModifyInformations = () => ({
  type: HIDE_MODIFY_INFORMATIONS,
});
