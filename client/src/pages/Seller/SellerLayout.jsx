import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const SellerLayout = () => {
  const { setIsSeller,navigate } = useAppContext();

  const dashboardicon = (
    <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
      />
    </svg>
  );

  const overviewicon = (
    <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z"
      />
    </svg>
  );

  const chaticon = (
    <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      />
    </svg>
  );

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: dashboardicon },
    { name: "Product List", path: "/seller/product-list", icon: overviewicon },
    { name: "Orders", path: "/seller/orders", icon: chaticon },
  ];

  const logout = async () => {
    try {

      const {data} =await axios.get("/api/seller/logout")

      if (data.success){

        toast.success(data.message)
        navigate("/")

      }else{
        toast.error(data.message)
      }
      
    } catch (error) {

      toast.error(data.message)
      
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 border-b border-gray-200 py-4 bg-white shadow-sm">
        <Link to="/">
          <img
            className="h-9"
            src="https://ik.imagekit.io/8maos45zi/Sparktech/logohead.png?updatedAt=1757687370767"
            alt="SparkTech Logo"
          />
        </Link>
        <div className="flex items-center gap-5 text-gray-600">
          <p className="font-medium">Hi! Admin</p>
          <button
            onClick={logout}
            className="border border-gray-300 rounded-full text-sm px-4 py-1.5 hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="md:w-64 w-20 bg-white border-r border-gray-200 flex flex-col py-6 shadow-sm">
          <nav className="flex flex-col space-y-1">
            {sidebarLinks.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                end={item.path === "/seller"}
                className={({ isActive }) =>
                  `flex items-center py-3 px-5 gap-3 text-sm font-medium rounded-r-full transition-all duration-200
                   ${
                     isActive
                       ? "bg-indigo-100 text-indigo-600 border-r-4 border-indigo-500"
                       : "text-gray-600 hover:bg-gray-50 hover:text-indigo-500"
                   }`
                }
              >
                {item.icon}
                <p className="hidden md:block">{item.name}</p>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
