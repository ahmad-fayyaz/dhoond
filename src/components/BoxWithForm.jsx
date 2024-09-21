const BoxWithForm = () => {
  return (
    <div className="bg-transparent text-white p-10 rounded-[30px] border-2 border-white inline-block text-center">
      {/* Heading */}
      <h2 className="font-light text-3xl mb-4">Join our Waitlist!</h2>

      {/* Description */}
      <p className="font-extralight text-sm mb-6 text-gray-300 pb-8">
        Sign up to receive early access and latest updates straight to your inbox. Follow us on <span className="underline text-white"><a href="https://www.instagram.com/dhoond.ar/">Instagram!</a></span>
      </p>

      {/* Form: Email input and button */}
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter email"
          className="p-2 pr-16 pl-4 text-sm rounded-full text-white bg-black border-2 border-white mr-4 outline-none"
        />
        <button className="p-2 rounded-full bg-white text-black text-sm font-medium border-2 border-transparent">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default BoxWithForm;