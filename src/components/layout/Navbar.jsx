function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black sticky top-0 z-50">
      <h1 className="text-red-600 text-2xl font-extrabold">
        STREAMFLIX
      </h1>

      <ul className="hidden md:flex gap-6 text-sm text-gray-300">
        <a href="#"><li className="hover:text-white cursor-pointer">Home</li></a>
        <li className="hover:text-white cursor-pointer">TV Shows</li>
        <li className="hover:text-white cursor-pointer">Movies</li>
        <li className="hover:text-white cursor-pointer">My List</li>
      </ul>
    </nav>
  );
}

export default Navbar;
