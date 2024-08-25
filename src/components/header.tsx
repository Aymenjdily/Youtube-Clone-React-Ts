import { Menu } from "lucide-react";

import SearchBar from "./searchBar";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";

const Header = () => {
  const actions = [
    { src: "/src/assets/icons/upload.svg" },
    { src: "/src/assets/icons/grid.svg" },
    { src: "/src/assets/icons/notification.svg" },
  ];

  return (
    <header className="py-3 px-4 fixed z-[99999] flex w-full bg-background items-center justify-between gap-x-3">
      <div className="flex items-center gap-x-4">
        <Sheet>
          <SheetTrigger className="lg:hidden block">
            <Menu className="" />
          </SheetTrigger>
          <SheetContent side="left" className="py-16 overflow-auto">
            <SideBar />
          </SheetContent>
        </Sheet>
        <Link to={"/"}>
          <img
            src="/src/assets/logo-white.svg"
            alt="logo"
            className="w-[80px] dark:hidden block"
          />
          <img
            src="/src/assets/logo-black.svg"
            alt="logo"
            className="w-[80px] dark:block hidden"
          />
        </Link>
      </div>
      <SearchBar />
      <div className="flex items-center">
        <div className="lg:flex hidden items-center gap-x-6">
          <ModeToggle />
          {actions.map(({ src }, idx) => (
            <img
              src={src}
              alt="icon"
              key={idx}
              className="w-[15px] cursor-pointer"
            />
          ))}
        </div>
        <img
          src="/src/assets/person.jpg"
          alt="person"
          className="w-[32px] lg:ml-6 h-[32px] rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
