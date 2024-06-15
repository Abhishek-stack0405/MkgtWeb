import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  "https://chrwgogcipcpiwzalkcp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNocndnb2djaXBjcGl3emFsa2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwNDA0MzUsImV4cCI6MjAzMzYxNjQzNX0.zyEvuzwC8VppKgEa5Q8aVskcKQmZ3eViA77Amzf3pOE"
);

const About = () => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const subscribeHandler = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    setClicked(false);
    const { data, error } = await supabase
      .from('users')
      .insert({ name: name, email: email, phone_number: phonenumber })
      .select();

    if (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    } else {
      console.log(data);
      setMessage("Subscription successful! Thank you.");
      // Clear the input fields
      setName("");
      setEmail("");
      setPhonenumber("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full px-4">
      <div className="flex flex-row">
        <hr className="w-10 border-t-2 hidden lg:block border-gray-700 rounded-sm mt-3 mr-2" />
        <p className="text-xl lg:2xl flex font-bold mx-auto">
          Our website is under construction
        </p>
      </div>

      <div className="mt-5">
        <p className="text-justify md:font-semibold">
          <span className="text-2xl font-bold">"MktgWeb,</span> New age start-up team equipped with digital skills which will help to{" "}
          <b>
            solve real-time business problems. Add Value to Your Business, provides quality work. Practice result-oriented approach to{" "}
          </b>
          solve Business Problems with Analytical solutions".
        </p>
        <div className="flex justify-center mt-10">
          {!clicked ? (
            <button
              className="font-bold lg:mt-2 mt-4 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => setClicked(true)}
            >
              Notify for Updates
            </button>
          ) : (
            <form onSubmit={subscribeHandler}>
              <div className="flex flex-col justify-center">
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                   className="border-gray-700 border h-10   w-64 focus:border-gray-900  rounded lg:mb-1 mb-2 pl-2"
                  placeholder="Enter your name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   className="border-gray-700 border h-10   w-64 focus:border-gray-900  rounded lg:mb-1 mb-2 pl-2"
                   placeholder="Enter email address"
                  required
                />
                <input
                  name="phone_number"
                  type="tel"
                  maxLength="10"
                  minLength="10"
                  value={phonenumber}
                  onChange={(e) =>  setPhonenumber(e.target.value)}
                   className="border-gray-700 border h-10   w-64 focus:border-gray-900  rounded lg:mb-1 mb-2 pl-2"
                  placeholder="Enter phone number"
                  required
                />
                <button
                  type="submit"
                   className="font-bold lg:mt-2 mt-4 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Subscribe
                </button>
               </div>
            </form>
          )}
        </div>
        {message && <p className="mt-5 text-center text-lg font-semibold">{message}</p>}
      </div>
    </div>
  );
};

export default About;
