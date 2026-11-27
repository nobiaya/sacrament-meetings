
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/meetings", label: "Meetings" },
    { href: "/meetings/current", label: "Current Meeting" },
  ];

  return (
    <nav aria-label="Main navigation" className="flex items-center gap-5">
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href === "/meetings" &&
            pathname.startsWith("/meetings/"));

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`text-sm font-medium transition ${
              isActive
                ? "text-blue-700"
                : "text-gray-600 hover:text-blue-700"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
