import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51PhGlnB6cRudXtMfNhNKfy0X8WlwvMP4KGFhPjBhbiSPOnmddeu1DquKXrfKU8hT5qiOqKSVM01RGLwjjgfu8HPi00qWywFuU1"!,
  {
    typescript: true,
    apiVersion: "2023-08-16",
  }
);
export async function POST(request: any) {
  const data: any = await request.json();
  const amount = data.amount;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });
    request.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    return request.status(400).json({ error: error.message });
  }
}
