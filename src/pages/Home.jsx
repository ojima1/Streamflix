import Navbar from "../components/layout/Navbar.jsx";
import Banner from "../components/banner/Banner.jsx";
import MovieRow from "../components/movies/MovieRow.jsx";
import { requests } from "../api/tmdb.js";

function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Banner />

      <main className="px-6 py-8">
        <MovieRow title="Trending Now" fetchUrl={requests.trending} />
        <MovieRow title="Popular on Netflix" fetchUrl={requests.popular} />
        <MovieRow title="Top Rated" fetchUrl={requests.topRated} />
      </main>
    </div>
  );
}

export default Home;
