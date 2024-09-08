import { MENU_LINKS } from "@/app/lib/constants";
import NavigationLink from "@/app/components/nav/navigation-link";

export default function Navigation() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto px-12 max-w-3xl flex justify-between items-center">
        <ul className="flex">
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

        <span className="text-sm font-medium text-black">Benito Lopez</span>
      </div>
    </header>
  );
}
