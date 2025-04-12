import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Horoscope and Astrology Insights",
  description: "This is Contact Page for Ausmora Horoscope",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with our expert astrologers and customer support team. Whether you have a questions about your horoscope, we're here to help."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
