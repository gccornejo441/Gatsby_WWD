import Image from 'next/image'
import Link from 'next/link'

export default function FeaturePost({ post }) {
    return (
        <div className='px-5 md:px-16 my-10 md:my-20'>
            <Link href={`/blog/${post.slug}`}>
                <a className="flex flex-col md:flex-row">
                    <div className="md:w-[60%]">
                        <div className='md:pr-10'>
                            <Image
                                className="rounded-lg"
                                src={post.frontmatter.cover_image}
                                height={500}
                                width={800}
                                layout="intrinsic"
                                alt=''
                            />
                        </div>
                    </div>
                    <div className="md:w-[40%]">
                        <div className='mb-3 py-b text-sm md:text-lg'>{post.frontmatter.date}</div>
                        <h3 className="text-2xl lg:text-4xl xl:text-4xl font-bold md:font-bold py-1">{post.frontmatter.title}</h3>
                        <p className="py-1 text-gray-700 text-sm md:text-base lg:text-lg font-[500]">{post.frontmatter.excerpt}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}