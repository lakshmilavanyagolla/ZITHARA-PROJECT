import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    label: "Home",
    href: "#",
  },

  {
    label: "Records",
    href: "/",
  },
  {
    label: "Contact",
    href: "#",
  },
];
const Navbar = () => {
  const pathname = window.location.pathname;
  return (
    <div className="h-[60px] justify-between bg-secondary shadow-sm  border-b flex items-center px-2 md:rounded-md">
      <header className="flex items-center">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <nav className="flex items-center gap-x-3 ml-3">
          {routes.map((route) => (
            <a
              href={route.href}
              key={route.href}
              className={cn("text-muted-foreground text-sm hover:text-primary", pathname === route.href && "text-primary")}
            >
              {route.label}
            </a>
          ))}
        </nav>
      </header>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
