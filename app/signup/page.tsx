import Link from "next/link";
const Signup = () => {
  return (
    <div className="w-full h-full fixed flex justify-center items-center">
      <div className=" w-52 h-full fixed left-0  bg-black"></div>
      <form className="w-96 border rounded-sm border-gray-300" action="">
        <div className="py-5">
          <h1 className="text-center text-gray-500 font-bold text-xl">
            Tacky Toe
          </h1>
          <p className="text-center text-light text-gray-500">
            Create An Account
          </p>
        </div>
        <div className="w-4/5 mx-auto mb-2">
          <label className="block text-sm py-1 text-gray-500">Email</label>
          <input
            type="text"
            className="w-full rounded-sm h-10 border border-gray-300"
          />
        </div>
        <div className="w-4/5 mx-auto mb-2">
          <label className="block text-sm py-1 text-gray-500">Username</label>
          <input
            type="text"
            className="w-full rounded-sm h-10 border border-gray-300"
          />
        </div>

        <div className="w-4/5 mx-auto mb-2">
          <label className="block text-sm py-1 text-gray-500">
            Phone-number
          </label>
          <input
            type="number"
            className="w-full rounded-sm h-10 border border-gray-300"
          />
        </div>
        <div className="w-4/5 mx-auto">
          <label className="block text-sm py-1 text-gray-500">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-sm h-10 border border-gray-300"
          />
        </div>
        <div className="w-4/5 py-2 mx-auto flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Already got an account ?</p>
          </div>
          <div>
            <Link
              href="/signin"
              className="border px-4 text-sm font-bold border-gray-300 rounded-sm w-20  h-7"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="w-4/5 mx-auto mb-6">
          <button className="w-full text-white text-sm h-10 bg-black rounded-sm">
            Create
          </button>
        </div>
        <div className="w-4/5 mb-3 mx-auto flex justify-center items-center">
          <div className="h-10 w-10 flex justify-center items-center rounded-sm border border-gray-300">
            <p className="text-xl font-extrabold">G</p>
          </div>
          <p className="px-2 text-xs text-gray-400">Signup with google </p>
        </div>
      </form>
    </div>
  );
}

export default Signup