export const handleChangeState = (event, setState, state) => {
  const { name, value } = event.target;
  setState({ ...state, [name]: value });
};
