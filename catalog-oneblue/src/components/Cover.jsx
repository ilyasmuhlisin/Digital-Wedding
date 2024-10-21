import React from "react";
import { Link } from "react-router-dom";
import flowerImageL from "../assets/flower-blueL.png";
import flowerImageR from "../assets/flower-blueR.png";

function Cover() {
  return (
    <section
      id="hero"
      className="hero w-full h-screen flex justify-center items-center text-center text-black"
    >
      {/* Gambar daun di pojok kiri atas */}
      <img src={flowerImageL} alt="Leaf" className="leaf-top" />

      {/* Gambar daun di pojok kanan bawah */}
      <img src={flowerImageR} alt="Leaf" className="leaf-bottom" />
      <main className="px-4">
        <h4 className="text-sm sm:text-md lg:text-lg mb-4">
          Kepada Bapak/Ibu/Saudara/i,
        </h4>
        <h1 className="text-gold text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Naufal & Sekar
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl mb-6">
          Akan melangsungkan pernikahan dalam:
        </p>
        <Link
          to="/home"
          className="bg-amber-600 text-white py-2 px-6 rounded-lg text-sm sm:text-lg lg:text-xl hover:bg-amber-500 transition duration-300"
        >
          Lihat Undangan
        </Link>
      </main>
    </section>
  );
}

export default Cover;
