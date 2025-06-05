import Quotes from '../Components/Quotes';
import Signupinputs from '../Components/Signupinputs';

const Signup = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen">
      {/* Left side: Sign up form */}
      <div className="p-6 flex justify-center items-center">
        <Signupinputs type="Sign up" link="Signin" />
      </div>

      {/* Right side: Quotes - visible only on large screens */}
      <div className="hidden lg:flex bg-gray-100 p-10 items-center justify-center">
        <Quotes />
      </div>
    </div>
  );
};

export default Signup;
