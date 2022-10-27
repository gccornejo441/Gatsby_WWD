import Image from 'next/image'
import Link from 'next/link'

export default function Post({ post }) {
    let { cover_image, alt, date, title, excerpt, image_title } = post.frontmatter;

    return (
        <div>
            <Link href={`/blog/${post.slug}`}>
                <div>
                    <Image
                        className="rounded-lg"
                        src={cover_image}
                        height={300}
                        width={510}
                        alt={alt}
                        title={image_title}
                    />
                </div>
                <div>
                    <div className='mb-3 py-1 text-sm md:text-lg'>{date}</div>
                    <h3 className="text-2xl md:text-xl xl:text-3xl font-bold md:font-semibold py-1">{title}</h3>
                    <p className="py-1 text-gray-600 font-[500] text-sm md:text-sm lg:text-lg">{excerpt}</p>
                </div>
            </Link>
        </div>
    )
}