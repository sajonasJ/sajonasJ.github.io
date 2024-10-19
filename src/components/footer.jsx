import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      I am the foot
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
