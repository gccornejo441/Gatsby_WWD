import React from 'react'
import Link from 'next/link'

const sitemap = () => {
    return (
      <main className="bg-gradient-to-t from-gray-50 to-white">
        <div className="w-full grid justify-items-center my-20">
          <div className="container flex justify-center text-cnter">
            <div className="flex smooch-text">
              <span className="text-greeny font-normal text-6xl md:text-7xl">
                Sitemap
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto pb-20">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </main>
    );
}

export default sitemap;