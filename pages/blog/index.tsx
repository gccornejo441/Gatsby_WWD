import * as React from "react";
import Head from "next/head";
import Post from '../../components/posts/post'
import FeaturePost from '../../components/posts/featurePost'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
import Image from "next/image";
import Bubbles from '../../public/images/bubbles.svg'


const TITLE: string = "Blog | WebWorks Dreams";

interface Props {
    posts: {
        slug: string;
        frontmatter: {
            [key: string]: any;
        };
    }[]
}

const Blog: React.FC<Props> = ({ posts }) => {
    return (
        <>
            <Head>
                <meta name="robots" content="all" />

                {/* OG */}
                <meta property="fb:app_id" content="254907099748012" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.webworksdreams.com/" />
                <meta
                    property="og:title"
                    content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
                />
                <meta
                    property="og:image"
                    content="https://www.webworksdreams.com/images/sharecard.jpg"
                />
                <meta property="og:image:alt" content="A web developer hard at work" />
                <meta
                    property="og:description"
                    content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
                />
                <meta
                    name="description"
                    content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
                />
                <meta property="og:site_name" content="WebWorks Dreams" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@WebWorksDreams" />
                <meta
                    name="twitter:title"
                    content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
                />
                <meta
                    name="twitter:description"
                    content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
                />
                <meta
                    name="twitter:image"
                    content="https://www.webworksdreams.com/images/sharecard.jpg"
                />
                <meta name="twitter:image:alt" content="A web developer hard at work" />
                <title>{TITLE}</title>
            </Head>
            <main className="flex justify-center bg-gradient-to-t from-gray-50 to-white text-gray-800">
                <div className="container mb-28">
                    <div className="flex px-4 md:px-16 md:py-16">
                        <div className="md:w-1/2 mt-10">
                            <h1 className="font-bold text-5xl lg:text-7xl lg:leading-[5rem]">
                                Lastest advice
                                on how to improve
                                your webspace
                            </h1>
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                            <Image
                                src={Bubbles}
                                alt="Background bubbles"
                            />
                        </div>
                    </div>
                    <div>
                        <FeaturePost key="0" post={posts[0]} />
                    </div>
                    <div className='container grid md:grid-cols-3 gap-10 px-5 md:px-16'>
                        {posts.map((post, index) => (
                            <>
                                {index !== 0 ? (
                                    <div className="">
                                        <Post key={index} post={post} />
                                    </div>
                                ) : (
                                    false
                                )}
                            </>
                        )
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};


export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}

export default Blog;
