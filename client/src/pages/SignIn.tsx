export const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex justify-center items-center">
        <div className="border border-gray-200 px-8 py-6 rounded-md shadow-2xl shadow-white w-full max-w-md bg-white">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="user@gmail.com"
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="**********"
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
