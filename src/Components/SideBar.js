import React from 'react';

const SideBar = () => {
    const styles = {
        sideBar:{
            display: 'grid',
            
            backgroundColor: 'limegreen',
            width: '20%',
        },
    }
    return (
        <div className='sideBar' style={styles.sideBar}>
            <h3> SideBar placeholder</h3>
        </div>
    )
}
export default SideBar;