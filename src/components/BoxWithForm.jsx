// src/BoxWithForm.jsx
import React, { useState } from "react";

const BoxWithForm = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email_user, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (!first_name || !last_name || !email_user) return; // Don't proceed if any field is empty

    try {
      const response = await fetch("https://okashamunir.app.n8n.cloud/webhook/edba6981-391d-4152-974c-3304c33f34f4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ first_name, last_name, email_user }), // Send all fields as JSON
      });

      if (response.ok) {
        // Handle success
        console.log("Details submitted successfully!");
        setFirstName(""); // Clear the input fields
        setLastName("");
        setEmail("");
      } else {
        // Handle error
        console.error("Error submitting details:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting details:", error);
    }
  };

  return (
    <div className="bg-transparent text-white p-6 sm:p-10 rounded-[30px] border-2 border-white inline-block text-center">
      {/* Heading */}
      <h2 className="font-light text-2xl sm:text-3xl mb-4">Join our Waitlist!</h2>

      {/* Description */}
      <p className="font-extralight text-sm mb-6 text-gray-300 pb-8">
        Sign up to receive early access and latest updates straight to your inbox. Follow us on{" "}
        <span className="underline text-white">
          <a href="https://www.instagram.com/dhoond.ar/">Instagram!</a>
        </span>
      </p>

      {/* Form: Input fields and button */}
      <form className="flex flex-col sm:flex-row justify-center items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 text-sm rounded-full text-white bg-black border-2 border-white mb-4 sm:mb-0 sm:mr-4 w-full sm:w-1/4" // Adjusted width
        />
        <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          className="p-2 text-sm rounded-full text-white bg-black border-2 border-white mb-4 sm:mb-0 sm:mr-4 w-full sm:w-1/4" // Adjusted width
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email_user}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 pr-16 pl-4 text-sm rounded-full text-white bg-black border-2 border-white mb-4 sm:mb-0 sm:mr-4 w-full sm:w-1/4 outline-none" // Adjusted width
        />
        <button type="submit" className="p-2 rounded-full bg-white text-black text-sm font-medium border-2 border-transparent">
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

export default BoxWithForm;