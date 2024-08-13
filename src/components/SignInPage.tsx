import { SignIn } from "@clerk/clerk-react";
import { RiStoreFill } from "react-icons/ri";

const SignInPage = () => {
  return (
    <div className="container mx-auto">
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="bg-white  overflow-hidden ">
        <div className="lg:grid  lg:min-h-screen lg:grid-cols-12">
          <section className="  relative  flex justify-center items-center  h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <div className="bg-hero bg-cover bg-right absolute  inset-0 h-full w-full object-cover opacity-80"></div>

            <div className="hidden b  lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <RiStoreFill className=" text-[40px]" />
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to BuyHub 🛒
              </h2>

              <p className="mt-4 leading-relaxed  text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  href="#"
                >
                  <span className="sr-only">Home</span>
                  <RiStoreFill className=" text-[40px]" />
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to BuyHub 🛒
                </h1>

                <p className="mt-4 leading-relaxed pb-5 text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>

              <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignInPage;
