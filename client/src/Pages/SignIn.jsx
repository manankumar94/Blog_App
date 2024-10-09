import { Alert, Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if someone left a field empty
    if ( !formData.email || !formData.password) {
      return setErrorMessage("Please Fill Out All the Fields !!");
    }
    try {
      setErrorMessage(null);
      const res = await fetch('/api/signin', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.Message);
      }

      if (res.ok) {
        navigate('/');
      }
    } catch (error) {
      console.error("Error during sign-In:", error.message || error);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col items-center gap-5'>
        {/* Greeting and welcome message */}
        <div className='text-center'>
          <p className='text-2xl font-semibold text-gray-800 dark:text-white'>नमस्कार! 🙏</p>
          <p className='text-lg text-gray-700 dark:text-gray-300'>Welcome to BlogiFy!</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>Dive in the world of stories, ideas, and inspiration.</p>
        </div>

        {/* Form Section */}
        <div className='w-full max-w-md p-5 bg-white shadow-md rounded-lg'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              {/* Email field */}
              <Label value='E-mail' />
              <TextInput
                type="email"
                placeholder='example@gmail.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              {/* Password field */}
              <Label value='Password' />
              <TextInput
                type="password"
                placeholder='Example Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign-In
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span> Don't Have an Account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign-Up
            </Link>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <Alert className='mt-5' color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
