import { PageSeo } from '../../lib/seo'

const metaData = {
    "title": "WebWorks Dreams",
    "sitesnippet": "Learn how we helped companies boosted online sales and streamlined the shopping experience with the help of their ecommerce implementations and other web services.",
    "description": "Discover how our team successfully implemented an ecommerce platform for Safety Compliance & Training, resulting in increased sales and improved customer satisfaction. Read our case study to learn more about the process and outcomes of this transformative project.",
    "language": "en-us",
    "imageUrl": "https://www.webworksdreams.com/images/sharecard.jpg",
    "alt": "A web developer hard at work",
    "tHandle": "@WebWorksDreams",
    "site": "@WebWorksDreams",
    "tCardType": "summary_large_image",
    "appId": "254907099748012"
  }
  
const SCT = () => {

    return (
      <>
        <PageSeo
          title={metaData.title}
          description={metaData.description}
          sitesnippet={metaData.sitesnippet}
          imageUrl={metaData.imageUrl}
          alt={metaData.alt}
          tHandle={metaData.tHandle}
          tSite={metaData.tHandle}
          tCardType={metaData.tCardType}
          appId={metaData.appId}
        />
        <div className="bg-gradient-to-t from-gray-50 to-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mx-auto px-3 flex justify-center flex-col text-center md:text-left pb-12 lg:px-28 xl:px-48">
              <h1 className="text-gray-800 font-bold text-3xl md:text-7xl">
              Elevating the Online Shopping Experience: An Ecommerce Implementation Journey
              </h1>
              <h2 className="text-gray-800 font-normal pt-10 text-xl md:text-3xl">
              Safety Compliance & Training LLC
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
            <p className='text-left'>
                Our client, Safety Compliance & Training, had a dream of starting a subscription-based course to share their expertise with a wider audience. They approached us with the goal of creating a dedicated SCTite portal that would allow them to manage different classification of members, from basic to expert, and offer recurring payments using popular payment gateways.

                After discussing the client&apos;s needs and goals, we began the process of developing a custom website portal using WooCommerce, a popular e-commerce platform. We integrated the site with Stripe and Affirm, two popular payment gateways, to allow for easy and secure recurring payments.
            </p>
            <p className='text-left'>
            To accommodate the different classification of members, we developed a custom membership system that allowed the client to create different membership levels, each with its own set of perks and access to course materials. The system also allowed for easy management of members and their subscriptions, including the ability to add, delete, or update member information.

We also implemented various security measures to protect the site and sensitive member information, including SSL encryption and frequent backups.

Overall, the project was a success, and our client was able to launch their subscription-based course with a fully functional and secure website portal. The site has been well-received by members, and our client has seen a steady stream of recurring payments thanks to the seamless integration with Stripe and Affirm. We were happy to play a role in helping our client bring their dream to fruition and look forward to continuing to support their business as it grows.

            </p>
            <a className='text-xl text-blue-600 underline' href='https://safetycomplianceandtraining.com/roadsideready/'>
                To see the website demo, click here
            </a>

            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default SCT
  