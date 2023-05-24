const Header = () => {
  return (
    <div className="md:flex md:items-center md:justify-between m-4 p-4">
      <div className="min-w-0 flex-1">
        <span className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight ">
          My Forms{" "}
        </span>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <a
          href="/user-form"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          + New User
        </a>
        <a
          href="/"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          All Users
        </a>
      </div>
    </div>
  );
};

export default Header;
