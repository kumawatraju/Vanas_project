import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ isExpanded, handleToggleSidebar }) {
  return (
    <div className="flex flex-row bg-slate-50 h-screen w-full relative">
      <Sidebar isExpanded={isExpanded} />
      <div className="flex-1 flex flex-col">
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="flex-1 overflow-y-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
