import { RiStoreFill } from "react-icons/ri";

import { toast } from "react-toastify";

const Checkout = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const notify = () => toast("thank for your order");
    notify();
  };
  return (
    <form onClick={handleSubmit} className=" h-screen ">
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

export default Checkout;
