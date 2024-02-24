"use client";
import Link from "next/link";
import Image from "next/image"; //optimizes images//must give it a widthand height
import { useState, useEffect } from "react";

//imp for loginstuff
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  // const isUserLoggedIn = true;
  //session
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  //for loggingstuff again
  useEffect(() => {
    async function setUpProvider() {
      const response = await getProviders(); //from next-auth/react
      setProviders(response);
    }
    setUpProvider();
  }, []);

  // alert(session?.user);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="Prompt Palace Logo"
          className="object-contain"
        />
        {/* <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">Prompt Palace</p> max-sm:hidden meaning hide when reached this height  */}
        <p className="logo_text">Prompt Palace</p>

        {/*Deskktop Navigation 👇 */}
      </Link>
      {/* basically meaning hidden unless we reach the hgeight  if 640pc 👇*/}
      <div className="sm:flex hidden">
        {/* {isUserLoggedIn ? ( */}
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="outline_btn hover:bg-amber-700"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          // getting all provider but in this case only one provider from goolge auth 👇
          <>
            {providers &&
              Object.values(providers).map((p) => (
                <button
                  type="button"
                  key={p.name}
                  onClick={() => signIn(p.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/*Mobile Navigation 👇 */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prevState) => !prevState)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* {providers &&
              Object.values(providers).map((p) => (
                <button
                  type="button"
                  key={p.name}
                  onClick={() => signIn(p.id)}
                  className="black_btn"
                >
                  Sign In
                </button> */}
            {providers && (
              <button
                type="button"
                key={Object.values(providers)[0].name}
                onClick={() => signIn(Object.values(providers)[0].id)}
                className="black_btn"
              >
                Sign In
              </button>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
