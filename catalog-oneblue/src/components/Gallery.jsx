import React from "react";

const Gallery = () => {
  return (
    <section className="py-12 bg-blue-50">
      <h1 className="text-center text-3xl font-bold text-amber-600 mb-8">
        Our Moments
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Moment 1"
          className="w-full rounded-md shadow-md"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Moment 2"
          className="w-full rounded-md shadow-md"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Moment 3"
          className="w-full rounded-md shadow-md"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Moment 4"
          className="w-full rounded-md shadow-md"
        />
      </div>
    </section>
  );
};

export default Gallery;
