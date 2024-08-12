const stripe = require("stripe")(import.meta.env.VITE_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { amount, currency, paymentMethodType, email } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method_types: [paymentMethodType],
        receipt_email: email,
      });

      res.status(200).json({ client_secret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
