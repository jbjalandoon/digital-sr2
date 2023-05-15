import { AiFillDashboard } from "react-icons/ai";
import { BsFillCartDashFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { TbBrand4Chan, TbUsers } from "react-icons/tb";
import Link from "next/link";
import AdminSideNavItem from "./NavItem";

export default function AdminSideNav() {
  return (
    <div className='z-50 flex h-screen w-80 flex-col shadow-xl'>
      <div className='mb-5 flex h-20 w-full items-center justify-center'>
        Title Here
      </div>
      <div className='h-full self-center'>
        <ul className='flex flex-col gap-8'>
          <AdminSideNavItem href='#' Icon={AiFillDashboard}>
            Dashboard
          </AdminSideNavItem>
          <AdminSideNavItem href='#' Icon={BsFillCartDashFill}>
            Products
          </AdminSideNavItem>
          <AdminSideNavItem href='#' Icon={BiCategory}>
            Category
          </AdminSideNavItem>
          <AdminSideNavItem href='#' Icon={TbBrand4Chan}>
            Brands
          </AdminSideNavItem>
          <AdminSideNavItem href='#' Icon={TbUsers}>
            Users
          </AdminSideNavItem>
        </ul>
      </div>
    </div>
  );
}
