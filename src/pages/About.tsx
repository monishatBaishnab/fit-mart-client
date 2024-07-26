/**
 * https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600
 * https://images.pexels.com/photos/14516256/pexels-photo-14516256.jpeg?auto=compress&cs=tinysrgb&w=600
 * https://www.pexels.com/photo/black-and-gray-metal-tool-4325442/
 * https://images.pexels.com/photos/4325454/pexels-photo-4325454.jpeg?auto=compress&cs=tinysrgb&w=600
 *
 */

import FTDurability from "../assets/icons/FTDurability";
import FTQuality from "../assets/icons/FTQuality";
import FTUserFriendly from "../assets/icons/FTUserFriendly";
import AboutUs from "../components/modules/About/AboutUs";
import QuestionsAndAnswers from "../components/modules/About/QuestionsAndAnswers";
import FTBreadcrumbs from "../components/ui/FTBreadcrumbs";
import FTSectionTitle from "../components/ui/FTSectionTitle";

const About = () => {
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
                icon: {path: 'stroke-white', wrapper: 'bg-indigo-600/50'},
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
      <QuestionsAndAnswers />
    </div>
  );
};

export default About;
