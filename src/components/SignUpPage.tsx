import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="container mx-auto">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
