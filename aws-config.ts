import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: process.env.NEXT_PUBLIC_REGION,
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
        userPoolWebClientId: process.env.NEXT_PUBLIC_CLIENT_APP_ID,
    },
});
