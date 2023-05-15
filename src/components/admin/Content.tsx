import AdminNavBar from "./navigation/NavBar";

export default function AdminContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='w-full'>
      <AdminNavBar />
      {children}
    </main>
  );
}
