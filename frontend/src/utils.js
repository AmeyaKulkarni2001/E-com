export const getError = (e) => {
  return e.response && e.response.data.message
    ? e.response.data.message
    : e.message;
};
