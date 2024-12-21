"use client"

import navItems from "@/constant/NavigationItems";
import {
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const DashboardNavigation = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };


  return (
    <nav className="grid items-start gap-2 px-2 text-sm font-medium lg:px-4">
      {navItems.map((item) => (
        <div key={item.name}>
          {item.subMenu ? (
            <div>
              <button
                onClick={() => toggleSubMenu(item.name)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.name}
                </div>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openMenus[item.name] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenus[item.name] && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.subMenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.to}
                      className="block rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary text-lg"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={item.to}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary text-lg"
            >
              {item.icon}
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DashboardNavigation;