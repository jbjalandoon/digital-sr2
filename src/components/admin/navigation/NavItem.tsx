import Link from "next/link";
import { IconType } from "react-icons";

export default function AdminSideNavItem({
  children,
  href,
  Icon,
}: {
  children: React.ReactNode;
  href: string;
  Icon: IconType;
}) {
  return (
    <li className='grid h-8 grid-cols-2 gap-0'>
      <span className='flex w-1/2 items-center text-2xl'>
        <Icon />
      </span>
      <span className='-ml-5 flex items-center'>
        <Link href={href}>{children}</Link>
      </span>
    </li>
  );
}
