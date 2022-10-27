import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const TITLE: string = "Blog | WebWorks Dreams";


export default function PostPage({
  frontmatter: { title, date, excerpt, cover_image, alt, image_title, image_description },
  slug,
  content,
}) {
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
          content={title + " " + "|" + " " + "WebWorks Dreams"}
        />
        <meta
          name="twitter:description"
          content={excerpt}
        />
        <meta
          name="twitter:image"
          content={"https://www.webworksdreams.com" + cover_image}
        />
        <meta name="twitter:image:alt" content="A web developer hard at work" />
        <title>{title} | WebWorks Dreams</title>
      </Head>
    <div className="flex flex-col text-gray-800 px-4">
      <div className="container mx-auto max-w-[692px]">
          <Link 
          href='/blog' 
          className="h-full text-xs text-gray-800 hover:underline"
          >
            Go Back
          </Link>
      </div>
      <div className="text-left post-body-w md:self-center">
        <h1 className='font-bold text-3xl md:text-5xl pt-10'>{title}</h1>
          <h2 className="py-4 text-lg md:text-2xl font-semibold text-greeny">{excerpt}</h2>
        <div className='pb-10 pt-2'>Posted on {date}</div>
        <figure>
          <Image
            src={cover_image}
            alt={alt}
            title={image_title}
            width={730}
            height={400}
            loading="lazy"
          />
          <figcaption className="text-xs text-center">{image_description}</figcaption>
        </figure>
        <div className='text-left post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
