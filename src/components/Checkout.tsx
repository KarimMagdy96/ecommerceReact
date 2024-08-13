import { toast } from "react-toastify";

import { cartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const { total, clearCart } = useContext(cartContext);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const notify = () => toast("thank for your order");
    notify();
    clearCart();
  };
  return (
    <div className=" h-screen  overflow-hidden">
      <div className=" w-1/2"></div>
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
                <h1 className="mt-6 capitalize text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  {total > 0
                    ? ` your total amount is ${total} EGP`
                    : "Your Cart is Empty"}
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  {total > 0
                    ? "Please click on the checkout button to complete the purchase"
                    : "Please add items to your cart to complete new purchase"}
                </p>

                {total > 0 ? (
                  <form
                    onSubmit={handleSubmit}
                    action="#"
                    className="mt-8 grid grid-cols-6 gap-6"
                  >
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="FirstName"
                        className="block text-sm  font-medium text-gray-700"
                      >
                        First Name
                      </label>

                      <input
                        type="text"
                        id="FirstName"
                        name="first_name"
                        className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="LastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>

                      <input
                        type="text"
                        id="LastName"
                        name="last_name"
                        className="mt-1 w-full rounded-md p-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="Email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Address{" "}
                      </label>

                      <input
                        type="text"
                        id="address"
                        name="email"
                        className="mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                      <button className=" inline-block shrink-0 rounded-md border te border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500">
                        Confirm Your Order
                      </button>
                    </div>
                  </form>
                ) : (
                  ""
                )}
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
