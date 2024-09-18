"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import logo from '../../public/logo.jpg';

const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    }, [])

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 justify-between">
                <Link href='/' className="btn btn-ghost">
                    <Image
                        src={logo}
                        alt="supplyChain Logo"
                        width={50}
                        height={50}
                        className='object-contain'
                    />
                    <p className='max-sm:hidden text-xl'>
                        supplyChain
                    </p>
                </Link>

                {/* Desktop Navigation */}
                <div className='sm:flex hidden'>
                    {isUserLoggedIn ? (
                        <div className='flex gap-3 md:gap-5'>
                            <Link href='/create-prompt' className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'>
                                Create Post
                            </Link>

                            <button type='button' onClick={signOut} className='rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center'>
                                Sign Out
                            </button>

                            <Link href='/profile'>
                                <Image
                                    src={logo}
                                    width={37}
                                    height={37}
                                    alt='profile'
                                />
                            </Link>
                        </div>
                    ): (
                        <>
                            {providers && 
                                Object.values(providers).map((provider) => (
                                    <button
                                        type='button'
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                    >
                                        Sign In
                                    </button>
                                ))}
                        </>
                    )}
                </div>
                {/* Mobile Navigation */}
                <div className='sm:hidden flex relative'>
                    {isUserLoggedIn ? (
                        <div className='flex'>
                            <Image
                                src={logo}
                                alt="supplyChain Logo"
                                width={50}
                                height={50}
                                className='object-contain'
                                onClick={() => setToggleDropDown((prev) => !prev)}
                            />

                            {toggleDropDown && (
                                <div className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end'>
                                    <Link
                                        href='/profile'
                                        className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                                        onClick={() => setToggleDropDown(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setToggleDropDown(false);
                                            signOut();
                                        }}
                                        className='mt-5 w-full rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ): (
                        <>
                            {providers && 
                                Object.values(providers).map((provider) => (
                                    <button
                                        type='button'
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                    >
                                        Sign In
                                    </button>
                                ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Nav