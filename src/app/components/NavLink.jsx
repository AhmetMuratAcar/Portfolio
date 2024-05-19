import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-3 px-5 text-black sm:text-xl rounded md:p-0 md:px-4 md:py-3 hover:bg-[#3761E8] hover:text-white"
      // Adjust padding for small devices and use specific padding for medium devices
    >
      {title}
    </Link>
  );
};

export default NavLink;
