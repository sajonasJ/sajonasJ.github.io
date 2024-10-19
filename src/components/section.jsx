import React from 'react';

const Section = () => {
  return (
    <div style={styles.section}>
      Section is here
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '20px',
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Section;
