import React from 'react';

const Footer = () => {
    const styles={
        footer: {
            gridArea: 'footer',
            backgroundColor: 'lightgreen',
          },
    }

return (
    <div className='footer' style={styles.footer}>
            <h3> Footer placeholder</h3>
        </div>
    )
}
export default Footer;