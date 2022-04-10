import Image from 'next/image'
import Link from 'next/link'

export default function Post({ post }) {
    return (
        <div className="">
            <Link href={`/blog/${post.slug}`}>
                <a>
                    <div>
                        <Image
                            className="rounded-lg"
                            src={post.frontmatter.cover_image}
                            height={300}
                            width={510}
                            layout="intrinsic"
                            alt=''
                        />
                    </div>
                    <div className="">
                        <div className='mb-3 py-1 text-sm md:text-lg'>{post.frontmatter.date}</div>
                        <h3 className="text-2xl lg:text-4xl xl:text-6xl font-bold md:font-semibold py-1">{post.frontmatter.title}</h3>
                        <p className="py-1 text-gray-600 font-[500] text-sm md:text-lg">{post.frontmatter.excerpt}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}