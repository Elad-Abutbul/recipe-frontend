// import { useState } from 'react'
// import axios from '../../../axiosConfig';
// import { enqueueSnackbar } from 'notistack';

// const useSearch = () => {
//      const [state, setState] = useState([]);
//      const [loading, setLoading] = useState(false);
//      const search = async ({input,permission}) => {
//           try {
//                if (state.length !== 0) {
//                     setLoading(true);
//                     const res = await axios.post('/recipes/search',{input,permission});
//                     setState(res.data.search);
//                     setLoading(false);
//                } else {
//                     setState([]);
//                }
//           } catch (error) {
//                console.error(error);
//                setLoading(false);
//                enqueueSnackbar("An Error Occurred", { variant: 'error' });
//           }
//      }
//      return { search, state, loading };
// }
// export default useSearch;