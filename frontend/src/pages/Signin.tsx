import Signupinputs from '../Components/Signupinputs';
import Quotes from '../Components/Quotes';

const Signin = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen">
      {/* Left side: Sign in form */}
      <div className="p-6 flex justify-center items-center">
        <Signupinputs type="Sign in" link="Signup" />
      </div>

      {/* Right side: Quotes - visible only on large screens */}
      <div className="hidden lg:flex bg-gray-100 p-10 items-center justify-center">
        <Quotes />
      </div>
    </div>
  );
};

export default Signin;
