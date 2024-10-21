import React, { useState } from "react";

const RSVP = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your RSVP has been submitted.`);
    setName("");
    setEmail("");
    setAttending("");
  };

  return (
    <section className="flex flex-col items-center py-12 bg-white">
      <h1 className="text-3xl font-bold text-amber-600 mb-6">RSVP</h1>
      <form
        className="w-full max-w-md bg-blue-50 shadow-md p-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <label className="block mb-2 text-lg">Name:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="block mb-2 text-lg">Email:</label>
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block mb-2 text-lg">Will you be attending?</label>
        <select
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          value={attending}
          onChange={(e) => setAttending(e.target.value)}
          required
        >
          <option value="">--Select--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button
          className="w-full bg-amber-600 text-white py-2 rounded-md"
          type="submit"
        >
          Submit RSVP
        </button>
      </form>
    </section>
  );
};

export default RSVP;
