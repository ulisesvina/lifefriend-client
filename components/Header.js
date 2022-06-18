import { useUser } from "@auth0/nextjs-auth0";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const navRef = useRef(null);

  const collapse = () => {
    navRef.current.classList.toggle("hidden");
  };

  const { user, isLoading } = useUser(),
    isLogged = !!user && !isLoading;

  return (
    <>
      {isLogged && (
        <header className="top-0 sticky p-8 bg-dark">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-shrink-0 lg:mr-6">
              <Link href="/">
                <span className="text-3xl font-bold">
                  LifeFriend
                </span>
              </Link>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={collapse}
                className="px-3 py-2 border rounded border-white-400"
                aria-label="Toggle navigation"
              >
                <FaBars />
              </button>
            </div>
            <nav
              ref={navRef}
              className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden"
            >
              <ul className="lg:flex-grow">
                <li className="lg:inline-block">
                  <Link href="/">
                    <a className="block mt-4 lg:inline mr-4 lg:mt-0 text-main">Home</a>
                  </Link>
                </li>
                <li className="lg:inline-block">
                  <Link href="/documents">
                    <a className="block mt-4 lg:inline mr-4 lg:mt-0 text-light">Documents</a>
                  </Link>
                </li>
                <li className="lg:inline-block">
                  <Link href="/emergencies">
                    <a className="block mt-4 lg:inline mr-4 lg:mt-0 text-accent">Nearby Emergencies</a>
                  </Link>
                </li>
                <li className="lg:inline-block">
                  <Link href="/help">
                    <a className="block mt-4 lg:inline mr-4 lg:mt-0 text-secondary">Medical Help</a>
                  </Link>
                </li>
                <li className="lg:inline-block">
                  <a href="/api/auth/logout">
                    <p className="block mt-4 lg:inline mr-4 lg:mt-0 text-red">Logout</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
      {!isLogged && (
        <header className="top-0 sticky p-8 bg-dark text-center">
          <Link href="/">
            <span className="text-3xl font-bold">LifeFriend</span>
          </Link>
        </header>
      )}
    </>
  );
};

export default Header;
