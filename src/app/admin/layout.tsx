import AdminContent from "@/components/admin/Content";
import AdminNavBar from "@/components/admin/navigation/NavBar";
import AdminSideNav from "@/components/admin/navigation/SideNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex w-full'>
      <AdminSideNav />
      <div className='w-full'>
        <AdminContent>{children}</AdminContent>
      </div>
    </div>
  );
}
