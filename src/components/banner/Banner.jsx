import { useEffect, useState } from "react";
import { IMAGE_BASE_URL, requests } from "../../api/tmdb.js";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchFeaturedMovie() {
      const res = await fetch(requests.trending);
      const data = await res.json();

      // pick a random movie
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];

      setMovie(randomMovie);
    }

    fetchFeaturedMovie();
  }, []);

  return (
    <header
      className="relative h-[70vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: movie
          ? `url(${IMAGE_BASE_URL}${movie.backdrop_path})`
          : "none",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {movie?.title || movie?.name}
        </h1>

        <p className="text-sm md:text-base text-gray-200 mb-6 line-clamp-3">
          {movie?.overview}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition">
            ▶ Play
          </button>

          <button className="bg-gray-500/70 px-6 py-2 rounded font-semibold hover:bg-gray-500 transition">
            More Info
          </button>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </header>
  );
}

export default Banner;
