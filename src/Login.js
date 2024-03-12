import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = 'YOUR_CLIENT_ID';

const Login = () => {
  const onSuccess = (response) => {
    console.log('Login successful:', response);
    // Here you'll receive the access token in response.accessToken
    // You can store it in the state or pass it to other components
  };

  const onFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
