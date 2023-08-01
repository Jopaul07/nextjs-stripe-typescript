import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Auth } from 'aws-amplify';

import SignUp from './auth/signup';
import Layout from '../layouts/alpha'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

interface IFormInputs {
  name: string
  email: string
  password: string
  birthdate: string
  data_consent: boolean
  physician_consent: boolean
}

export default function PreviewPage() {

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [generalError, setGeneralError] = React.useState<string | null>(null);

  const handleSignUp = async (
    data: IFormInputs,
    setError: (name: string, error: { type: string, message: string }) => void,
    clearErrors: () => void,
  ) => {
    // Set Loading state to true.
    setIsLoading(true);
    // Clear all form errors
    clearErrors();
    // Clear general error at the start of the function
    setGeneralError(null);
    try {
      const { user } = await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email,  // optional
          name: data.name,    // optional
          birthdate: data.birthdate, // optional
          "custom:verify_email": 'true',
          // other custom attributes
        },
      });

      let cognito_user_email = user.getUsername();

      // If the sign-up is successful, redirect to the Stripe checkout page
      const { sessionId } = await fetch('/api/checkout_sessions', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ quantity: 1, email: cognito_user_email })
      }).then(res => res.json())

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId
      });

    } catch (error) {
      if (error.hasOwnProperty('code') && error.code === 'UsernameExistsException') {
        // Handle the error for an already existing email in the user pool
        setError('email', { type: 'manual', message: 'A user with this email already exists.' });
      } else {
        // Set the general error message
        setGeneralError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout
      mainHeading={'90-day Access to StarStarter Rx for $49.99'}
      subHeading={'Download Instructions for Use'}
    >
      <SignUp
        onSubmitExt={handleSignUp}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        generalError={generalError}
      />
    </Layout>

  );
}
