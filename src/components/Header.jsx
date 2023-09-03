import { NavLink } from "react-router-dom";
import "../App.css"
export default function Header() {
  return (
    <header className="w-full z-10 flex justify-center py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
      <h1 className="font-bold text-3xl uppercase text-center">
        <NavLink to="/">
        Geeks Trends
        </NavLink>
      </h1>
    </header>
  );
}
