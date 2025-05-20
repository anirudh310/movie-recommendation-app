export default function TransferProfile() {
    return (
      <div className="pt-24 px-8 text-white min-h-screen bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl font-bold mb-8">Transfer Profile</h1>
        <div className="max-w-2xl bg-gray-800 p-8 rounded-lg">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Transfer to New Account</h2>
            <p className="text-gray-400 mb-6">
              Transfer your profile including watch history and recommendations to another account.
            </p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Recipient's Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500"
                  placeholder="Enter email address"
                />
              </div>
              
              <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
                <h3 className="text-red-400 font-medium mb-2">Important:</h3>
                <ul className="text-red-300 text-sm list-disc pl-4">
                  <li>This action cannot be undone</li>
                  <li>You'll lose access to this profile</li>
                  <li>Recipient must accept the transfer within 7 days</li>
                </ul>
              </div>
  
              <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded font-semibold transition-colors">
                Initiate Profile Transfer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }