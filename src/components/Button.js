import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Button = () => {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasWFNdR6EJs6aVauyDcCTSXm9wk34vVIK8A&s" 
          alt="Ishan Customised Gifts Logo" 
          style={styles.logo} 
        />
        <h1 style={styles.title}>Ishan Customised Gifts</h1>
      </div>
      <div style={styles.container}>
        <div style={styles.loginContainer}>
          <h1 style={styles.heading}>Welcome</h1>
          <button style={styles.button} onClick={() => loginWithRedirect()}>Login</button>
          <button style={styles.button} onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    margin: 0
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: '100%',
    marginBottom: '20px'
  },
  logo: {
    height: '50px',
    width: '50px',
    marginRight: '10px'
  },
  title: {
    fontSize: '24px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    padding: '20px',
    width: '400px',
    maxWidth: '90%'
  },
  loginContainer: {
    padding: '20px',
    textAlign: 'center'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px'
  },
  button: {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#8be9fd',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer'
  }
};

export default Button;
