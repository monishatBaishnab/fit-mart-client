/**
 * https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600
 * https://images.pexels.com/photos/14516256/pexels-photo-14516256.jpeg?auto=compress&cs=tinysrgb&w=600
 * https://www.pexels.com/photo/black-and-gray-metal-tool-4325442/
 * https://images.pexels.com/photos/4325454/pexels-photo-4325454.jpeg?auto=compress&cs=tinysrgb&w=600
 *
 */

import { Input, Textarea } from "@nextui-org/react";
import FTDurability from "../assets/icons/FTDurability";
import FTQuality from "../assets/icons/FTQuality";
import FTUserFriendly from "../assets/icons/FTUserFriendly";
import AboutUs from "../components/modules/About/AboutUs";
import QuestionsAndAnswers from "../components/modules/About/QuestionsAndAnswers";
import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import FTSectionTitle from "../components/ui/FTSectionTitle";
import FTButton from "../components/ui/FTButton";
import FTArrowRight from "../assets/icons/FTArrowRight";
import { ChangeEvent, useState } from "react";
import useHotToast from "../hooks/useHotToast";

const About = () => {
  const { ftToast } = useHotToast();
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageData((prev) => ({
      ...prev,
      [e?.target?.name]: e?.target?.value,
    }));
  };

  const handleSendMessage = () => {
    if (messageData?.email && messageData?.message && messageData?.name) {
      ftToast("success", "Success", "Your message has been successfully sent.");
      setMessageData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } else {
      ftToast(
        "error",
        "Error",
        "Failed to send your message. Please ensure all required fields are completed."
      );
    }
  };

  return (
    <div>
      <FTBreadcrumbs />
      <AboutUs />
      <div className="bg-[url('https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=600')]">
        <div className="bg-gradient-to-l from-indigo-600/95 to-indigo-600/50 backdrop-blur-sm">
          <div className="container grid gap-7 grid-cols-1 md:grid-cols-2">
            <FTSectionTitle
              classNames={{
                title: "text-white",
                subtitle: "text-white",
                icon: { path: "stroke-white", wrapper: "bg-indigo-600/50" },
              }}
              subtitle="FitMart Product Features"
              title="Benefits of FitMart's Premium Fitness Equipment"
            />
            <div className="grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="ring-2 ring-white rounded-lg p-5 flex flex-col items-center">
                <FTQuality />
                <h4 className="text-white text-xl text-center font-semibold">
                  Innovative Design
                </h4>
              </div>
              <div className="ring-2 ring-white rounded-lg p-5 flex flex-col items-center">
                <FTDurability />
                <h4 className="text-white text-xl text-center font-semibold">
                  Superior Durability
                </h4>
              </div>
              <div className="ring-2 ring-white rounded-lg p-5 flex flex-col items-center">
                <FTUserFriendly />
                <h4 className="text-white text-xl text-center font-semibold">
                  User Friendly
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Questions Section */}
      <QuestionsAndAnswers />

      {/* Contact Information */}
      <div className="container !max-w-screen-md space-y-5">
        <div className="w-full">
          <FTSectionTitle
            title="Get in touch with us. We're here to assist you."
            subtitle="Get Started"
          />
        </div>
        <div className="space-y-3">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <Input
              value={messageData?.name}
              onChange={(e) => handleChange(e)}
              variant="underlined"
              placeholder="Your Name"
              name="name"
            />
            <Input
              value={messageData?.email}
              onChange={(e) => handleChange(e)}
              variant="underlined"
              placeholder="Email Address"
              name="email"
            />
            <Input
              value={messageData?.mobile}
              onChange={(e) => handleChange(e)}
              variant="underlined"
              placeholder="Mobile Number (Optional)"
              name="mobile"
            />
          </div>
          <div>
            <Textarea
              value={messageData?.message}
              onChange={(e) => handleChange(e)}
              variant="underlined"
              name="message"
              placeholder="Message"
            />
          </div>
          <FTButton
            onPress={handleSendMessage}
            color="primary"
            endContent={<FTArrowRight classNames={{ path: "stroke-white" }} />}
          >
            Leave us a Message
          </FTButton>
        </div>
      </div>
    </div>
  );
};

export default About;
