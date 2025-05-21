import { MENU_LINKS } from "@/lib/constants";
import NavigationLink from "@/components/nav/navigation-link";

export default function Navigation() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-12 max-w-3xl sm:flex justify-between items-center">
        <span className="order-2 text-sm font-medium text-black border-b block pt-2 pb-4 mb-4 sm:p-0 sm:m-0 sm:border-0">
          Benito Lopez
        </span>

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
