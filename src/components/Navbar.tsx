import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full px-6 py-4 flex-between bg-dark-1 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/icons/logo.svg"}
          alt="VidSync logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-white text-[26px] font-extrabold max-sm:hidden">
          VidSync
        </p>
      </Link>

      <div className="gap-5 flex-between">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
