import Appbar from '../Components/Appbar';
import { userdata2 } from '../hooks';
import { Avator } from '../Components/BlogsCard';

const Profile = () => {
  const { blogs } = userdata2() as { blogs: { name?: string; email?: string } };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />

      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>

        <div className="flex flex-col items-center mb-6 ">
          <Avator author_avatar={blogs?.name || "U"} />
        </div>

        <div className="space-y-2">
          <div>
            <span className="font-semibold text-gray-700">Name: </span>
            <span>{blogs?.name || "N/A"}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-700">Email: </span>
            <span>{blogs?.email || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
