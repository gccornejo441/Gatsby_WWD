import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router';

export const PageSeo = ({ title, description, sitesnippet, imageUrl, alt, tHandle, tSite, tCardType, appId }) => {
    const router = useRouter();

    return (
        <NextSeo
            title={`${sitesnippet} | ${title}`}
            description={description}
            canonical={`https://www.webworksdreams.com${router.pathname}`}
            openGraph={{
                type: 'website',
                site_name: 'WebWorks Dreams',
                url: `https://www.webworksdreams.com/${router.asPath}`,
                title: `${sitesnippet} | ${title}`,
                description: description,
                images: [
                    {
                        url: imageUrl,
                        width: 800,
                        height: 600,
                        alt: alt,
                    },
                ],
            }}
            twitter={{
                handle: tHandle,
                site: tSite,
                cardType: tCardType,
            }}
            facebook={{
                appId: appId,
            }}
        />
    )
}

// export const BlogSeo = ({ title, summary, date, lastmod, url, tags, images = [] }) => {
//     const publishedAt = new Date(date).toISOString()
//     const modifiedAt = new Date(lastmod || date).toISOString()
//     let imagesArr =
//         images.length === 0
//             ? [siteMetadata.socialBanner]
//             : typeof images === 'string'
//                 ? [images]
//                 : images

//     const featuredImages = imagesArr.map((img) => {
//         return {
//             url: `${siteMetadata.siteUrl}${img}`,
//             alt: title,
//         }
//     })

//     return (
//         <>
//             <NextSeo
//                 title={`${title} – ${siteMetadata.title}`}
//                 description={summary}
//                 canonical={url}
//                 openGraph={{
//                     type: 'article',
//                     article: {
//                         publishedTime: publishedAt,
//                         modifiedTime: modifiedAt,
//                         authors: [`${siteMetadata.siteUrl}/about`],
//                         tags,
//                     },
//                     url,
//                     title,
//                     description: summary,
//                     images: featuredImages,
//                 }}
//                 additionalMetaTags={[
//                     {
//                         name: 'twitter:image',
//                         content: featuredImages[0].url,
//                     },
//                 ]}
//             />
//             <ArticleJsonLd
//                 authorName={siteMetadata.author}
//                 dateModified={publishedAt}
//                 datePublished={modifiedAt}
//                 description={summary}
//                 images={featuredImages}
//                 publisherName={siteMetadata.author}
//                 title={title}
//                 url={url}
//             />
//         </>
//     )
// }