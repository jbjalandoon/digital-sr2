import Account from "./Account";

export default function NavBar() {
  return (
    <div className='flex h-20 w-full max-w-7xl items-center justify-around shadow-md'>
      <div>Title</div>
      <div>Searchbar</div>
      <div>Cart</div>
      <Account />
    </div>
  );
}
