export const handleChangeState = (event, setEntry, entry) => {
  const { name, value } = event.target;
     setEntry({ ...entry, [name]: value });
   };