import React from 'react';

const Header = () => {
  return (
    <div style={styles.header}>
      Jonas Sajonas
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '16px',
    textAlign: 'center',
    fontSize: '24px',
  },
};

export default Header;
