import { FaUser, FaPlus, FaEdit } from "react-icons/fa";

export default function ManageProfile() {
  return (
    <div className="pt-24 px-8 text-white min-h-screen bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl font-bold mb-8">Manage Profiles</h1>
      <div className="flex flex-wrap gap-8">
        {/* Existing Profile */}
        <div className="group relative cursor-pointer">
          <div className="w-32 h-32 rounded-md bg-gray-700 hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
            <FaUser className="text-6xl text-gray-300" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <FaEdit className="text-white text-2xl" />
          </div>
          <p className="text-center mt-2 text-gray-300">Your Profile</p>
        </div>

        {/* Add Profile */}
        <div className="cursor-pointer">
          <div className="w-32 h-32 rounded-md bg-gray-700 hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
            <FaPlus className="text-6xl text-gray-300" />
          </div>
          <p className="text-center mt-2 text-gray-300">Add Profile</p>
        </div>
      </div>
      
      <div className="mt-12 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-medium mb-2">Maturity Settings</h3>
            <p className="text-gray-400 text-sm">All Ratings: For all maturity levels</p>
            <button className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}