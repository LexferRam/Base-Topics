

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Already registered?
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" required className="" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Company size</label>
              <div className="mt-1">
                <select name="company-size" id="company-size" className="">
                  <option value="">Please select</option>
                  <option value="small">1 to 10 employees</option>
                  <option value="medium">11 to 50 employees</option>
                  <option value="large">50+ employees</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
              <label className="ml-2 block text-sm text-gray-900"
              >I agree to the
                <a href="#" className="text-indigo-600 hover:text-indigo-500 mx-1">Terms</a>
                and
                <a href="#" className="text-indigo-600 hover:text-indigo-500 mx-1">Privacy Policy</a>.
              </label>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
