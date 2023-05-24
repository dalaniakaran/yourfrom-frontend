import { useEffect, useState } from "react";

export default function Home() {
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await fetch("https://yourformresponse.onrender.com/submittedForms")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error: " + res.status);
        }
      })
      .then((data) => {
        setResponseData(data); // Set the response data as state
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ul className="divide-y divide-gray-100 m-4 p-4">
        {responseData?.map((submittedForm) => {
          return (
            <li
              key={submittedForm.id}
              className="flex items-center justify-between gap-x-6 py-5"
            >
              <div className="flex gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {submittedForm.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {submittedForm.email}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
        <li
          key="new-user"
          className="flex items-center justify-between gap-x-6 py-5"
        >
          <div className="flex gap-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>

            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                New User
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                user@myform.com
              </p>
            </div>
          </div>
          <a
            href="/user-form"
            className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            + Add New User
          </a>
        </li>
      </ul>
    </div>
  );
}
