import React from 'react';
import App from '../App';

const NewsStories = () => {
    const styles = {
        main :{
            display: 'grid',
            backgroundColor: 'red',
            width: '75%',
            height: '200px',
            color: 'green',
        },
    };
    return (
        <>
        <div className='main' style={styles.main}> 
        <h1>News story placeholder</h1>
        </div>
        </>
    )
}
export default NewsStories;