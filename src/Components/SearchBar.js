import React, {useState, useEffect} from 'react';
import NewsStories from './NewsStories';



 const SearchBar =()=> {
    const styles = {
       header:{
        gridArea: 'header',
        backgroundColor: 'teal',
        },
    }
    const [searchInput, setSearchInput] = useState('');
    return (
        <div className='header' style={styles.header}>
         <input 
         type='text'
         className={styles.textbox}
         placeholder='Search..'
         value={searchInput}
         />
         <h1>Header </h1>
        
         </div>
            
    )
}
export default SearchBar;