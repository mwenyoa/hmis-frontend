import React from "react";

type Props = {};

export const ContactUs: React.FC<Props> = () => {
  return (
    <section className="my-20 px-5 sm:my-24 sm:px-8 lg:my-32 lg:px-16">
      <div className="flex justify-center">
        <div className="text-center max-w-3xl">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Contact us</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        {/* Form Section */}
        <form className="w-full mb-12 lg:mb-0">
          <div className="mb-4">
            <label
              className="block mb-1 font-medium text-indigo-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-1 font-medium text-indigo-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mb-6">
            <label
              className="block mb-1 font-medium text-indigo-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
              rows={5}
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full px-6 py-3 text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white"
          >
            Send
          </button>
        </form>

        {/* Contact Information */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Technical support",
                email: "support@example.com",
                phone: "+1 234-567-89",
              },
              {
                title: "Sales questions",
                email: "sales@example.com",
                phone: "+1 234-567-89",
              },
              {
                title: "Press",
                email: "press@example.com",
                phone: "+1 234-567-89",
              },
            ].map((contact, index) => (
              <div key={index} className="flex items-start">
                <div className="p-4 text-teal-700 bg-teal-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="mb-1 font-bold">{contact.title}</p>
                  <p className="text-neutral-500">{contact.email}</p>
                  <p className="text-neutral-500">{contact.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
