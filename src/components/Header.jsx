import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { GrGithub } from "react-icons/gr";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ darkMode, setDarkMode }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="animate-pulse text-lg">
          <GrGithub size={42} />
        </h1>

        <div className="pl-80" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>
        <h5 className="ml-auto pr-40">
          {isAuthenticated && (
            <p>
              <h5>Welcome &#128515;</h5> {user.name}
            </p>
          )}
        </h5>
        {isAuthenticated ? (
          <button
            className="px-3 py-2 bg-red-500 text-white rounded-md"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : (
          <button
            className="px-3 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
      </nav>
      <hr />
    </header>
  );
};

export default Header;
