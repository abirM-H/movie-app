import React from 'react'



const Search =({value='', onChange=()=>{}}) => (
    <div className='movie-app-header'>
       <div className="name-filter">
          <input className="name-filter-text"
          type="text"
          value={value} 
          onChange={(event) => {
                onChange(event.target.value)
            }}/>
          <input className="name-filter-button" type="button" value="Search" />
       </div>
    
    </div>
    
)
    
  
export default Search
 