import { FaLock, FaEnvelope, FaGlobe, FaBell } from "react-icons/fa";

export default function Account() {
  return (
    <div className="pt-24 px-8 text-white min-h-screen bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl font-bold mb-8">Account Settings</h1>
      
      <div className="max-w-2xl space-y-8">
        {/* Security Card */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FaLock className="text-2xl mr-3 text-red-500" />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Password</h3>
                <p className="text-gray-400 text-sm">Last changed 3 months ago</p>
              </div>
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Email Preferences */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-2xl mr-3 text-red-500" />
            <h2 className="text-xl font-semibold">Email & Contact</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Primary Email</h3>
                <p className="text-gray-400 text-sm">user@example.com</p>
              </div>
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
                Update
              </button>
            </div>
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FaGlobe className="text-2xl mr-3 text-red-500" />
            <h2 className="text-xl font-semibold">Language & Region</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Display Language</h3>
                <p className="text-gray-400 text-sm">English</p>
              </div>
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Dangerous Zone */}
        <div className="bg-red-900/20 p-6 rounded-lg border border-red-800">
          <div className="flex items-center mb-4">
            <FaBell className="text-2xl mr-3 text-red-500" />
            <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Delete Account</h3>
                <p className="text-red-300 text-sm">Permanently delete your account and all data</p>
              </div>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}