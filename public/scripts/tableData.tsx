import { AiFillCheckCircle, AiOutlineMinus } from "react-icons/ai";

export const tableInfo = [
  {
    features: "Features",
    services: "Services",
    packages: "Included Pages",
    mocksites: "Website Mocksite",
    hosting: "Website Hosting",
    cert: "SSL Certificate",
    support: "Website Support",
    mobile: "Mobile Responsive",
    SEO: "SEO",
    revisions: "Revisions",
    price: {
      pricing: "Pricing",
      price1: "$300",
      price2: "$500",
      price3: "$1000",
      disc1:
        "This excellent bundle has been put together for hobbyists who are looking to share their ideas with the web.",
      disc2:
        "We have put together the perfect bundle for small business owners who want to stand out from the competition.",
      disc3:
        "Do you need to upgrade your business's website? Then we are happy to let you know this bundle is tailored to your team's needs.",
    },
  },
  {
    pages1: "3 Pages",
    pages2: "10 Pages",
    pages3: "15 Pages",
    check: (
      <AiFillCheckCircle
        style={{ color: "#10b77f" }}
        className="h-5 w-5 text-green-500"
      />
    ),
    dash: <AiOutlineMinus className="stroke-current text-darkGreeny h-5 w-5" />,
    packages: {
      starter: "Starter",
      premium: "Premium",
      executive: "Executive",
    },
  },
];


