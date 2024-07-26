import { Tab, Tabs } from "@nextui-org/react";
import { motion } from "framer-motion";
import FTSectionTitle from "../../ui/FTSectionTitle";

const aboutUsData = {
  companyOverview:
    "Welcome to FitMart — your one-stop shop for premium fitness equipment and accessories. Our journey began with a vision to empower fitness enthusiasts of all levels with high-quality, reliable products. We believe in supporting your health and wellness journey through innovative and efficient fitness solutions.",
  childOverview: [
    {
      title: "Product",
      description:
        "At FitMart, we offer a diverse range of fitness equipment and accessories designed to meet the needs of every fitness enthusiast. From high-performance cardio machines to versatile strength training equipment, our products are crafted to enhance your workout experience and help you achieve your fitness goals.",
    },
    {
      title: "Company",
      description:
        "Founded with a passion for fitness, FitMart has grown into a trusted brand in the industry. Our commitment to quality, innovation, and customer satisfaction has driven our success. We continually strive to bring the best products and services to our customers, ensuring they have the tools they need for a healthy lifestyle.",
    },
    {
      title: "Service",
      description:
        "We pride ourselves on delivering exceptional customer service. Our team is dedicated to assisting you with any questions or concerns, providing timely and helpful support. Whether you need product advice, order assistance, or general information, we're here to ensure your experience with FitMart is positive and rewarding.",
    },
  ],
};

const AboutUs = () => {
  return (
    <div className="container gap-7 grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-96">
        <div className="rounded-md overflow-hidden mr-7 h-[377px] w-[calc(100%_-_28px)]]">
          <img
            src="https://images.unsplash.com/photo-1674834726923-3ba828d37846?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-0 -bottom-7 w-1/2 md:w-1/4 h-1/2 outline outline-4 outline-white rounded-md overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1664300908936-c29cf9c0b293?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-3">
        <FTSectionTitle title="Our Company Overview" subtitle="About Us" />

        <p className="text-justify">{aboutUsData.companyOverview}</p>
        <div>
          <Tabs
            variant="underlined"
            classNames={{
              base: "",
              tab: "data-[focus-visible=true]:!outline-none data-[hover-unselected=true]:!opacity-100 group relative before:content-none after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:w-full after:bg-slate-200 after:z-0",
              tabContent:
                "group-hover:!text-indigo-600 text-slate-500 group-data-[selected=true]:!text-indigo-600",
              cursor: "bg-indigo-600 !w-full  !z-10",
              tabList: "!gap-0",
            }}
            fullWidth
            aria-label="About Us"
            size="lg"
          >
            {aboutUsData.childOverview.map((overview) => (
              <Tab
                key={overview.title}
                title={overview.title}
                className="data-[focus-visible=true]:!outline-none"
              >
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-justify"
                >
                  {overview.description}
                </motion.div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
