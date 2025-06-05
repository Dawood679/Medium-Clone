import Appbar from '../Components/Appbar';
import { userdata2 } from '../hooks';
import { Avator } from '../Components/BlogsCard';

type User = {
  name?: string;
  email?: string;
};

const Profile = () => {
  const { blogs } = userdata2() as { blogs: User };

  // Function to get initials from name
  const getInitials = (name?: string) => {
    if (!name) return "U";
    const names = name.trim().split(" ");
    if (names.length === 1) return names[0][0].toUpperCase();
    return (names[0][0] + names[1][0]).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />

      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>

        <div className="flex flex-col items-center mb-6">
          <Avator author_avatar={getInitials(blogs?.name)} />
        </div>

        <div className="space-y-3 text-center sm:text-left">
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
