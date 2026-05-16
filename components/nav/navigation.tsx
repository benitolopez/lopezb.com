import { MENU_LINKS } from "@/lib/constants";
import NavigationLink from "@/components/nav/navigation-link";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[45rem] sm:flex justify-between items-center">
        <Link
          href="/"
          className="order-2 border-b block pt-2 pb-4 mb-4 sm:p-0 sm:m-0 sm:border-0"
        >
          <span className="italic text-black">Benito Lopez</span>
        </Link>

        <ul className="flex order-1 flex-wrap">
          {MENU_LINKS.map((link) => {
            return (
              <li key={link.id}>
                <NavigationLink
                  id={link.id}
                  href={link.href}
                  name={link.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
