
import NavBar from "./navigation/NavBar";
import SearchBar from "./navigation/SearchBar";

export default function Header() {
  return (
    <header className='w-full h-auto flex flex-col items-center bg-slate-900'>
      <NavBar />
    </header>
  );
}
