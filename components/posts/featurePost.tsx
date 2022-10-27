import Image from 'next/image'
import Link from 'next/link'

export default function FeaturePost({ post }) {
    let { cover_image, alt, date, title, excerpt, image_title } = post.frontmatter;

    return (
        <div className='px-5 md:px-16 my-10 md:my-20'>
            <Link className="flex flex-col md:flex-row" href={`/blog/${post.slug}`}>
                <div className="md:w-[60%]">
                    <div className='md:pr-10'>
                        <Image
                            className="rounded-lg"
                            src={cover_image}
                            height={700}
                            width={1200}
                            alt={alt}
                            title={image_title}
                        />
                    </div>
                </div>
                <div className="md:w-[40%]">
                    <div className='mb-3 py-b text-sm md:text-lg'>{date}</div>
                    <h3 className="text-2xl lg:text-4xl xl:text-4xl font-bold md:font-bold py-1">{title}</h3>
                    <p className="py-1 text-gray-700 text-sm md:text-base lg:text-lg font-[500]">{excerpt}</p>
                </div>
            </Link>
        </div>
    )
}