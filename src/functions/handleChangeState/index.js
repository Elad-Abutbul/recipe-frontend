export const handleChangeState = (event, setEntry, state) => {
  const { name, value } = event.target;
  setEntry({ ...state, [name]: value });
};
