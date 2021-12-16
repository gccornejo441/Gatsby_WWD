

const tableContents = [
  "1. Personal Data",
  "2. Sharing Information",
  "3. Particular Collections",
  "4. Choice Data",
  "5. Specific Rights",
];

const Privacy = () => {
  return (
    <>
      {/* START OF PRIVACY BODY INFORMATION */}
      <div className="flex">
        <div className="text-left hidden lg:flex">
          <div className="px-3">
            <table>
              <tr>
                <th className="md:text-large py-2 text-gray-700">Categories</th>
              </tr>
              {tableContents.map((item, index) => (
                <tr key={index}>
                  <td className="md:text-sm py-2 font-normal text-gray-700">
                    {item}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div
          className="lg:mx-auto lg:w-3/4 overflow-y-scroll mx-8 h-[60vh]"
          id="privacy"
        >
          <div className="text-center md:text-left flex flex-col text-gray-800">
            <span className="text-xl sm:text-2xl">OVERVIEW</span>
            <span className="text-xl sm:text-2xl">
              This Privacy Policy describes our privacy practices at Webworks
              Dreams.
            </span>
            <span className="text-xl sm:text-2xl">May 22nd, 2021</span>
          </div>
          <div className=" text-lg text-darkGreeny">
            <ul>
              <li>
                <div className="py-4">
                  WebWorks Dreams, LLC and its affiliates/covered entities
                  (collectively, WebWorks Dreams,” “we”, “us”, or “our”) have
                  created this Privacy Policy to describe how we collect, use,
                  and disclose information. This Privacy Policy applies to
                  WebWorks Dreams’s online workplace productivity tools and
                  platform (collectively, the “Services”), Webworksdreams.com
                  and other WebWorks Dreams websites (collectively, the
                  “Websites”), and certain interactions (e.g. attending or
                  registering for one of our events), unless covered by a
                  separate privacy notice.
                </div>
              </li>
              <li>
                <div className="py-4">
                  When you visit our website https://webworksdreams.com, and use
                  our services, you trust us with your personal information. We
                  take your privacy very seriously. In this privacy notice, we
                  describe our privacy policy. We seek to explain to you in the
                  clearest way possible what information we collect, how we use
                  it and what rights you have in relation to it. We hope you
                  take some time to read through it carefully, as it is
                  important. If there are any terms in this privacy policy that
                  you do not agree with, please discontinue use of our Sites and
                  our services. This privacy policy applies to all information
                  collected through our website (such as
                  https://webworksdreams.com), and/or any related services,
                  sales, marketing or events (we refer to them collectively in
                  this privacy policy as the “Sites“).
                </div>
              </li>
            </ul>
          </div>
          <div id="personal-data" className="text-lg text-darkGreeny">
            <ul>
              <li className="py-4 font-bold">
                1. What kind of personal data does WebWorks Dreams collect and
                how is it used?
              </li>
              <li className="font-bold underline pt-6">
                <span> Direct Collection and Use</span>
              </li>
              <li className="py-2">
                We collect your personal information directly from you when you
                register to use WebWorks Dreams&apos;s products and services,
                when you contact us via our website contact form, when you sent
                us email or mail. We may collect the following personal
                information from you:
              </li>
            </ul>
            <div>
              <ul>
                <li className="py-1 ml-10">
                  a. Contact data, such as name, email, phone number
                </li>
                <li className="py-1 ml-10">
                  b. Payment data, such as invoice information or credit card
                  payment information.
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold py-4">This information is used to:</li>
                <li className="py-1 ml-10">
                  a. Provide you with products and services, and obtain payment
                </li>
                <li className="py-1 ml-10">
                  b. Respond to your requests and questions
                </li>
                <li className="py-1 ml-10">
                  c. Communicate upcoming WebWorks Dreams events of interest,
                  including co-branded events, or updates to our products and
                  services
                </li>
                <li className="py-1 ml-10">
                  d. Improve our products and services, and innovate new
                  products and services
                </li>
                <li className="py-1 ml-10">
                  e. Detect, prevent, and resolve security and technical issues
                </li>
                <li className="py-1 ml-10">
                  f. Fulfill the obligations outlined in the Services Agreement.
                </li>
                <li className="py-1 ml-10">
                  g. Provide WebWorks Dreams with marketing analytics and
                  insights
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold underline pt-6">
                  Third-Party Information Sharing
                </li>
                <li className="py-2">
                  We only share and disclose your information with the following
                  third parties. We have categorized each party so that you may
                  be easily understand the purpose of our data collection and
                  processing practices. If we have processed your data based on
                  your consent and you wish to revoke your consent, please
                  contact us.
                </li>
                <li className="py-1 ml-10">
                  a. <span className="font-bold">Invoice and Billing:</span>{" "}
                  Stripe
                </li>
                <li className="py-1 ml-10">
                  b.{" "}
                  <span className="font-bold">Web and Mobile Analytics:</span>{" "}
                  Google Analytics
                </li>
                <li className="py-1 ml-10">
                  c. <span className="font-bold">Website Hosting:</span> Heroku,
                  Vercel
                </li>
                <li className="py-1 ml-10">
                  d. <span className="font-bold">Security:</span> Cloudflare
                </li>
                <li className="py-1 ml-10">
                  e. <span className="font-bold">Cloud-Based Databases:</span>{" "}
                  MongoDB
                </li>
                <li className="py-1 ml-10">
                  f. Fulfill the obligations outlined in the Services Agreement.
                </li>
                <li className="py-1 ml-10">
                  g. Provide WebWorks Dreams with marketing analytics and
                  insights
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold underline pt-6">
                  Passive Collection and Use
                </li>
                <li className="py-2">
                  Like most companies, we collect limited personal information
                  from visitors to our website and users of our products and
                  services. This information may include:
                </li>
                <li className="py-1 ml-10">a. IP Address</li>
                <li className="py-1 ml-10">b. Browser Type</li>
                <li className="py-1 ml-10">
                  c. Internet Service Provider Address
                </li>
                <li className="py-1 ml-10">d. Referring pages</li>
                <li className="py-1 ml-10">
                  e. HTML pages, graphics, or other files viewed on our site
                </li>
                <li className="py-1 ml-10">f. Operating systems</li>
                <li className="py-1 ml-10">g. Date/time stamp</li>
                <li className="py-1 ml-10">h. Clickstream data</li>
                <li className="py-1">
                  We may use cookies, web beacons, pixels and other means to do
                  so. Please see our Cookie Policy for further information.
                </li>
              </ul>
            </div>
            <div>
              <ul id="sharing-data">
                <li className="py-4 font-bold">
                  2. Does WebWorks Dreams share my Personal Information?
                </li>
                <li className="py-2">
                  We will not sell, rent, or share your Personal Information
                  with third parties outside of our company without your
                  consent. We will also not share your information with third
                  parties for a purpose that is materially different from
                  original purposes without your consent.
                </li>
                <li className="py-2 ">
                  WebWorks Dreams may, however, share or disclose Personal
                  Information under certain circumstances:
                </li>
                <li className="py-1 ml-10">
                  a. We will share information with third parties who perform
                  services on our behalf. For example, we share information with
                  vendors who help us provide you with the WebWorks Dreams
                  products and services that you request.
                </li>
                <li className="py-1 ml-10">
                  b. We will share information with entities affiliated by
                  WebWorks Dreams.
                </li>
                <li className="py-1 ml-10">
                  c. We may share information if we are required by law or if we
                  think we have to in order to protect ourselves. For example,
                  we will share information to respond to a court order or
                  subpoena, to meet national security requirements, or if we are
                  investigating potential fraud.
                </li>
                <li className="py-1 ml-10">
                  d. We may share information with any successor to all or part
                  of our business. This may occur in the acquisition, in whole
                  or in part, of WebWorks Dreams, or in a sale of some or all of
                  WebWorks Dreams&apos; assets, a merger, a bankruptcy, or other
                  transition of the business.
                </li>
                <li className="py-1 ml-10">
                  e. We will share information if you ask that we share your
                  Personal Information with a third party.
                </li>
              </ul>
            </div>
            <div id="particular-data">
              <ul>
                <li className="py-4 font-bold">
                  3. Do We Collect Information From Minors?
                </li>
                <li>
                  Our websites and mobile applications are not created for
                  children. We do not knowingly collect Personal Information
                  from children under the age of 16. WebWorks Dreams does not
                  target our website, our products or services towards children
                  under the age of 16. If you are a parent or legal guardian and
                  think your child under 13 has given us information, you can
                  email us at WebWorksDreams@gmail.com.
                </li>
              </ul>
            </div>
            <div id="choice-data">
              <ul>
                <li className="py-4 font-bold">
                  4. Do I have a choice in providing my personal information to
                  your company?
                </li>
                <li>
                  When interacting with our company, you choose what personal
                  information and how much information you provide to us. Your
                  choice may affect our ability to provide you with our products
                  or services. If you would like to know if we have your
                  Personal Information via third-party collection, please email
                  us at WebWorksDreams@gmail.com.
                </li>
              </ul>
            </div>
            <div id="specific-data">
              <ul>
                <li className="py-4 font-bold">
                  5. Do California Residents Have Specific Privacy Rights?
                </li>
                <li>
                  California Civil Code Section 1798.83, also known as the
                  “Shine The Light” law, permits our users who are California
                  residents to request and obtain from us, once a year and free
                  of charge, information about categories of personal
                  information (if any) we disclosed to third parties for direct
                  marketing purposes and the names and addresses of all third
                  parties with which we shared personal information in the
                  immediately preceding calendar year. If you are a California
                  resident and would like to make such a request, please submit
                  your request in writing to us using the contact information
                  provided below.
                </li>
                <li>
                  If you are under 18 years of age, reside in California, and
                  have a registered account with the Sites, you have the right
                  to request removal of unwanted data that you publicly post on
                  the Sites. To request removal of such data, please contact us
                  using the contact information provided below, and include the
                  email address associated with your account and a statement
                  that you reside in California. We will make sure the data is
                  not publicly displayed on the Sites, but please be aware that
                  the data may not be completely or comprehensively removed from
                  our systems.
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="py-4 font-bold">
                  Changes to the Privacy Policy
                </li>
                <li>
                  To the extent allowed by applicable law, WebWorks Dreams
                  reserves the right to change this Privacy Policy at any time
                  without prior notice. WebWorks Dreams will notify you of
                  material changes by posting the changed or modified Privacy
                  Policy on our Websites. You are responsible for reviewing this
                  Privacy Policy each time you use or access our Websites. Any
                  changes will be effective immediately upon the posting of the
                  revised Privacy Policy unless otherwise specified. Your
                  continued use after the effective date will constitute your
                  consent to those changes. WebWorks Dreams will provide notice
                  and obtain your consent (opt-in or opt-out) if required.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
