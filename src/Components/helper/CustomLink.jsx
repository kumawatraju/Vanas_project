import { Link } from "react-router-dom";

function CustomLink({ isExpanded, to, title, Icon }) {
  return (
    <Link
      to={to}
      className="flex items-center p-2 hover:bg-gray-100 rounded-md"
    >
      <span className="text-xl md:block hidden">{Icon}</span>
      {!isExpanded && <span className="ml-2 md:block hidden font-[600] text-slate-500">{title}</span>}
    </Link>
  );
}

export default CustomLink;
