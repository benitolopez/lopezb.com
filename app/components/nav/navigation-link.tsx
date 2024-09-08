"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLinkProps = {
  id: string;
  href: string;
  name: string;
};

export default function NavigationLink(props: NavigationLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === props.href ||
    (pathname.startsWith("/articles") && props.href === "/articles");

  return (
    <Link
      key={props.id}
      href={props.href}
      className={`mr-5 flex items-center space-x-3 rounded-md py-1.5 text-sm  ${
        isActive
          ? "text-blue-600 font-medium"
          : "text-gray-700 hover:text-black"
      }`}
    >
      <span>{props.name}</span>
    </Link>
  );
}
