import { Swiper, SwiperSlide } from "swiper/react";
import FTStar from "../../../assets/icons/FTStar";
import { Pagination } from "swiper/modules";
import FTSectionTitle from "../../ui/FTSectionTitle";
import FTUsers from "../../../assets/icons/FTUsers";
const users = [
  {
    name: "John D.",
    profession: "Fitness Trainer",
    date: "10-03-2024",
    age: 35,
    location: "Los Angeles, CA",
    image:
      "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1722151874~exp=1722152474~hmac=1928018e16130cb76916b7296568e98dd61a7a1e4901a9abce1257eb5e140317",
    rating: 5,
    review:
      "Sleek and intuitive interface with seamless checkout process. Highly recommend!",
  },
  {
    name: "Emily R.",
    profession: "Yoga Instructor",
    date: "23-03-2024",
    age: 28,
    location: "Austin, TX",
    image:
      "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?size=626&ext=jpg&ga=GA1.1.1403393067.1720082693&semt=sph",
    rating: 4,
    review:
      "Great product range and filtering options. Minor issue with page refresh warning.",
  },
  {
    name: "Michael T.",
    profession: "Gym Owner",
    date: "02-04-2024",
    age: 42,
    location: "New York, NY",
    image:
      "https://img.freepik.com/free-photo/front-view-man-working-as-real-estate-agent_23-2151064882.jpg?size=626&ext=jpg&ga=GA1.1.1403393067.1720082693&semt=sph",
    rating: 5,
    review:
      "My go-to site for fitness equipment with real-time inventory updates. Well done!",
  },
  {
    name: "Sarah P.",
    profession: "Personal Trainer",
    date: "12-05-2024",
    age: 30,
    location: "Chicago, IL",
    image:
      "https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064826.jpg?size=626&ext=jpg&ga=GA1.1.1403393067.1720082693&semt=sph",
    rating: 4,
    review:
      "Detailed descriptions and debounced search feature are great. Small bug with filters.",
  },
  {
    name: "David H.",
    profession: "Sports Coach",
    date: "10-05-2024",
    age: 37,
    location: "Miami, FL",
    image:
      "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1722151874~exp=1722152474~hmac=1928018e16130cb76916b7296568e98dd61a7a1e4901a9abce1257eb5e140317",
    rating: 5,
    review:
      "Fantastic user experience with dynamic pricing updates. Secure checkout process.",
  },
  {
    name: "Lisa M.",
    profession: "Nutritionist",
    date: "15-05-2024",
    age: 32,
    location: "Seattle, WA",
    image:
      "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?size=626&ext=jpg&ga=GA1.1.1403393067.1720082693&semt=sph",
    rating: 4,
    review:
      "Impressive product variety and mobile responsiveness. More sorting options would be nice.",
  },
  {
    name: "Robert K.",
    profession: "Physical Therapist",
    date: "05-06-2024",
    age: 45,
    location: "San Francisco, CA",
    image:
      "https://img.freepik.com/free-photo/front-view-man-working-as-real-estate-agent_23-2151064882.jpg?size=626&ext=jpg&ga=GA1.1.1403393067.1720082693&semt=sph",
    rating: 5,
    review:
      "Easy to explore different equipment categories. Quick and helpful customer support.",
  },
  {
    name: "Jessica L.",
    profession: "Fitness Blogger",
    date: "10-07-2024",
    age: 27,
    location: "Denver, CO",
    image:
      "https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064826.jpg?size=626&ext=jpg&ga=GA1.1.1403393067.1720082693&semt=sph",
    rating: 4,
    review:
      "Clear product listings with useful sorting by price. Optional features enhance user experience.",
  },
];

const Customer = () => {
  return (
    <div className="container space-y-7">
      <FTSectionTitle title="Our Satisfied Customers" subtitle="Customer" icon={<FTUsers classNames={{path: 'stroke-indigo-600'}} />} />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="customer-testimonial"
      >
        {users?.map((user) => (
          <SwiperSlide key={user.name}>
            <div className="space-y-3 bg-slate-50 p-5 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-cover"
                    src={user.image}
                    alt={user.name}
                  />
                </div>
                <div className="">
                  <h5 className="text-lg text-slate-700 font-semibold -mb-1">
                    {user.name}
                  </h5>
                  <span className="text-sm text-slate-500">
                    {user.profession}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-slate-700">{user.review}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 bg-yellow-500 p-1 rounded-md text-white text-xs">
                  <FTStar
                    classNames={{ path: "stroke-white", svg: "w-3.5 h-3.5" }}
                  />
                  <span>{user.rating}/5</span>
                </div>
                <div>
                  <h6 className="text-sm text-slate-500">Date: 20-10-2023</h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customer;
