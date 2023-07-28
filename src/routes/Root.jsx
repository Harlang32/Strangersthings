
import { Outlet} from "react-router-dom";
import {Link, NavLink} from "react-router-dom";

export default function Root() {
  return (
    <div className="w-full h-2">
      <nav className="bg-yellow-500">
        <div className="container mx-auto">
          <h1 className=" text-white text-4xl font-bold text-left">
            Stranger's Things
          </h1>
          <div className="flex items-center justify-between px-4 py-3">
            <NavLink
              to={`/login`}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            ></NavLink>
            
            <div className="text-xl flex items-center">
              <div className="mr-10">
                <Link to={"/Home"} className="text-white mr-4">
                  Home
                </Link>
                <Link to={"/Profile"} className="text-white mr-4">
                  Profile
                </Link>
                <Link to={"/Login"} className="text-white mr-4">
                  Login
                </Link>
                <Link to={"/index"} className="text-white mr-4">
                  Posts
                </Link>
                <Link to={"/logout"} className="text-white mr-4">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}