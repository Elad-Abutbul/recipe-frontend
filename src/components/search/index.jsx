import React, { useState } from 'react'
import { useSearch } from '../../Api'
import { Loading } from '../loading';
export const Search = ({permission}) => {
     const [input, setInput] = useState('');
     // const { search, state, loading } = useSearch();
     const handleSearch = async () => {
          
     }
   
  return (
       <div>{handleSearch()}
            <input type="search" value={input} onChange={(e)=>setInput(e.target.value)}/>
            {/* {loading?<Loading/>:state.length!==0&&state.map(value=>value.name)} */}
       </div>
  )
}
