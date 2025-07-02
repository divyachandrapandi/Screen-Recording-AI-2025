"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from 'react'
const user ={};
const Navbar = () => {
    const router = useRouter();
    return (
        <header className="navbar">
            <nav>
                <Link href="/">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="Streamify Logo"
                        width={32}
                        height={32}
                    />
                    <h1>Streamify</h1>
                </Link>

                {user && (
                        <figure>
                            <button onClick={() => router.push(`/profile/324234`)} >
                                <Image
                                    src="/assets/images/dummy.jpg"
                                    alt="User"
                                    width={36}
                                    height={36}
                                    className="rounded-full aspect-square"
                                />
                            </button>

                            <button>
                                <Image
                                    src="/assets/icons/logout.svg"
                                    alt="logout"
                                    width={24}
                                    height={24}
                                    className="rotate-180"
                                />
                            </button>
                        </figure>
                    )}
                    < /nav>
                    </header>
                    )
                }
                export default Navbar
