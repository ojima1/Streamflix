import { useEffect, useState, useRef } from "react";
import { IMAGE_BASE_URL } from "../../api/tmdb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // arrow icons

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null); // reference to the scroll container

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(fetchUrl);
      const data = await res.json();
      setMovies(data.results || []);
    }

    fetchMovies();
  }, [fetchUrl]);

  // Scroll left or right by row width
  const handleScroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.clientWidth; // scroll by visible width
      if (direction === "left") {
        rowRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="mb-8 relative">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>

      {/* Scroll buttons */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
      >
        <FaChevronRight />
      </button>

      {/* Movie row */}
      <div
        ref={rowRef}
        className="overflow-x-scroll scrollbar-hide"
      >
        <div className="inline-flex gap-4">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              className="w-40 rounded-lg hover:scale-105 transition cursor-pointer flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieRow;
