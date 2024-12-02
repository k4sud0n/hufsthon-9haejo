import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  Q_StorageIcon,
  FaceIdIcon,
  PersonIcon,
} from "../img/navIcon";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(1);
  const navItems = [
    { id: 1, name: "사람", icon: PersonIcon, to: "/main" },
    {
      id: 2,
      name: "나를 좋아하는",
      icon: Q_StorageIcon,
      to: "/likesme",
    },
    { id: 3, name: "채팅", icon: FaceIdIcon, to: "/message" },
  ];

  return (
    <div className="fixed bottom-0 w-96 -ml-5 flex justify-around bg-white shadow-md px-2 py-3 md:px-6 md:py-4">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.to}
          className={`flex flex-col items-center text-center text-sm md:text-base py-1 md:py-3 transition-colors ${
            activeNav === item.id ? "text-blue-700" : "text-black"
          } hover:text-blue-700`}
          onClick={() => setActiveNav(item.id)}
        >
          <div className="mb-1 md:mb-2">
            <item.icon size="25px" />
          </div>
          <span className="text-xs md:text-sm">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
