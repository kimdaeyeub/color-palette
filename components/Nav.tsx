import Link from "next/link";
import { dancingScript } from "@/utils/fonts";
import NavLink from "./NavLink";
import LoginBtn from "./LoginBtn";
import NavProfileImage from "./NavProfileImage";
import { getUser } from "@/utils/functions";

const Nav = async () => {
  const user = await getUser();

  return (
    <div className="w-full md:py-5 py-3 xl:px-32 md:px-14 px-8 flex justify-between items-center">
      <Link
        href="/"
        className={"md:text-5xl text-3xl font-bold " + dancingScript.className}
      >
        Palette
      </Link>
      <div className="flex justify-center items-center space-x-16 relative">
        <div className="hidden md:flex justify-center items-center space-x-8">
          <NavLink mode={null} />

          <NavLink mode={"dark"} />

          <NavLink mode={"light"} />
          <Link
            href="/palettes/add"
            className="text-gray-400 font-medium text-lg"
          >
            Add Palette
          </Link>
        </div>
        {user.length !== 0 ? (
          <NavProfileImage
            imageUrl={user[0].image}
            userId={user[0]._id.toString()}
          />
        ) : (
          <div className="flex justify-center items-center">
            <NavLink mode={null} responsive />
            <LoginBtn />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
