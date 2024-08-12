import { RiStoreFill } from "react-icons/ri";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      console.log(submitError.message);
      return;
    }

    try {
      // Call the serverless function to create a PaymentIntent and get the clientSecret
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: "usd",
          email: "karimmagdy96@gmail.com",
          amount: 10, // Stripe expects the amount in cents
          paymentMethodType: "card",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create PaymentIntent");
      }

      const { client_secret: clientSecret } = await res.json();

      // Use the clientSecret to confirm the payment with Stripe
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
      });

      if (error) {
        console.log(error.message);
      } else {
        // Redirect will happen automatically on success
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" h-screen ">
      <div>
        <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1475998893297-4da48a6e037d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </aside>

            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl">
                <a className="block " href="#">
                  <span className="sr-only">Home</span>
                  <RiStoreFill className=" text-[40px]" />
                </a>

                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Thanks for buying from BuyHub 🛒
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 mb-14">
                  please fill the form to complete your order.
                </p>

                <PaymentElement />
                <button className=" bg-primary p-2 text-white rounded w-full mt-5">
                  Submit
                </button>
              </div>
            </main>
          </div>
        </section>
      </div>
    </form>
  );
};

export default CheckoutForm;
