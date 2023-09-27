import React from 'react'
import App from '../App';

 const SearchBar =()=> {
    const styles = {
        header: {
            display: 'grid',
            backgroundColor: 'purple',
            width: '100%',
        },
      };
    return (
        <header>
        <div className='header' style={styles.header}>
        
         <h1>Search </h1>
        
         </div>
            
        </header>
    )
}
export default SearchBar;