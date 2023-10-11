"use client";
import React from "react";
import Swal from "sweetalert2";

const AddBlogs = () => {
  const handleAddBlog = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newBlog = { title, content, category, photo };

    fetch("/api/addPost", {
      method: "POST",
      body: JSON.stringify({
        task: newBlog,
        isDone: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your blog has been added",
          showConfirmButton: false,
          timer: 500,
        });
      });
  };

  return (
    <div>
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Add Blog
              </h1>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form onSubmit={handleAddBlog}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Title
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="text"
                        name="title"
                        className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        required=""
                        aria-describedby="email-error"
                      />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="content"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Content
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="content"
                        name="content"
                        className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        required=""
                        aria-describedby="content-error"
                      />
                      <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="photo"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Photo url
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="photo"
                        name="photo"
                        className="py-3 px-4 block w-full border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        required=""
                        aria-describedby="photo-error"
                      />
                    </div>
                  </div>
                  {/* End Form Group */}

                  <div>
                    <label
                      htmlFor="hs-inline-leading-select-label"
                      className="block text-sm font-medium mb-2 dark:text-white"
                    >
                      Category
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-inline-leading-select-label"
                        name="category"
                        className="py-3 px-4 pl-20 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder=""
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center text-gray-500 pl-px">
                        <label
                          htmlFor="hs-inline-leading-select-country"
                          className="sr-only"
                        >
                          Subject
                        </label>
                        <select
                          id="hs-inline-leading-select-country"
                          name="hs-inline-leading-select-country"
                          className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800"
                        >
                          <option>Drama</option>
                          <option>Poetry</option>
                          <option>Prose</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Checkbox */}

                  {/* End Checkbox */}
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Add Blog
                  </button>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddBlogs;
