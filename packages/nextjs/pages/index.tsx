import Link from "next/link";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
    >
      {children}
    </Link>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Mensola</span>
          </h1>

          <h2>
          Governance and POS service for Barcodes. Transparent, affordable, and widely available
          </h2>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
         {/* Add content */}
         <NavLink href="/example-ui">
          Try it
        </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
