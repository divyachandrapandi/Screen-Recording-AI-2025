"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ICONS } from '@/constants';
import DropdownList from '@/components/DropdownList';


const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
    return (
        <header className="header">
            <section className="header-container">
                <figure className="details">
                    { userImg && (
                        <Image
                            src="/assets/images/dummy.jpg"
                            alt="User"
                            width={ 36 }
                            height={ 36 }
                            className="rounded-full aspect-square"
                        />
                    ) }

                    <article>
                        <p>{ subHeader }</p>
                        <h1>{ title }</h1>
                    </article>
                </figure>

                <aside>
                    <Link href="/upload">
                        <Image
                            src="/assets/icons/upload.svg"
                            alt="upload"
                            width={ 16 }
                            height={ 16 }
                        />
                        <span>Upload a video</span>
                    </Link>
                    {/*    Record screen */ }
                    <div className={ "record" }>
                        <button className={ "primary-btn" }>
                            <Image src={ ICONS.record } alt={ "record" } width={ 16 } height={ 16 } />
                            <span>Record a video</span>
                        </button>
                    </div>
                </aside>
            </section>
            <section className="search-filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for videos, tags, folders..."
                        // value={ searchQuery }
                        // onChange={ (e) => setSearchQuery(e.target.value) }
                    />
                    <Image
                        src="/assets/icons/search.svg"
                        alt="search"
                        width={ 16 }
                        height={ 16 }
                    />
                </div>
                <DropdownList
                    // options={ filterOptions }
                    // selectedOption={ selectedFilter }
                    // onOptionSelect={ handleFilterChange }
                    // triggerElement={ renderFilterTrigger() }
                />
            </section>
        </header>
    )
}
export default Header
