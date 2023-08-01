import { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                // submit_type: 'PAY NOW', 
                payment_method_types: ['card'],
                customer_email: `${req.body.email}`,
                line_items: [{
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: process.env.STRIPE_PRICE_ID,
                    quantity: 1,
                }],
                mode: 'payment',
                success_url: `${req.headers.origin}/payment/result?session_id={CHECKOUT_SESSION_ID}&success=true`,
                cancel_url: `${req.headers.origin}/`,
            });
            res.status(200).json({sessionId: session.id});
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
    // res.status(200).json({ name: "Joe" });
};

// function CheckoutSessions() {
//     // Partial of ./pages/api/checkout_sessions/index.ts
//     // ...
//     // Create Checkout Sessions from body params.
//     const params: Stripe.Checkout.SessionCreateParams = {
//         submit_type: 'donate',
//         payment_method_types: ['card'],
//         line_items: [
//             {
//                 name: 'Custom amount donation',
//                 amount: formatAmountForStripe(amount, CURRENCY),
//                 currency: CURRENCY,
//                 quantity: 1,
//             },
//         ],
//         success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
//     };
//     const checkoutSession: Stripe.Checkout.Session =
//         await stripe.checkout.sessions.create(params);
//     // ...
// }