import React from 'react';

const SideBar = () => {
    const styles = {
        sideBar:{
            gridArea: 'nav',
            backgroundColor: 'tomato',
          }
    }
    return (
        <div className='sideBar' style={styles.sideBar}>
            <h3> SideBar placeholder</h3>
        </div>
    )
}
export default SideBar;