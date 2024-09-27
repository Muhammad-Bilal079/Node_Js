import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); //this is stripe secrete key givin from stripe website 

const app = express()
app.use(cors())

app.post('/payment', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "T-Shirt",
        });

        const price = await stripe.prices.create({ //yeah price define ki hai
            product: product.id,
            unit_amount: 200 * 100, // 100 pkr
            currency: 'pkr',
        });

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                }
            ],
            mode: 'payment', //yeah mode hai kay kis liay hum stripe use kar ahay hain
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            customer_email: 'demo@gmail.com',
        });

        res.json({ url: session.url });

    } catch (error) {
        console.error('Error creating payment session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/success', (req, res) => {
    res.send('Payment Successful!');
});


let port = 3000
app.listen(port, () => {
    console.log('server is running');

})