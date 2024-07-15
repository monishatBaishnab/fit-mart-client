import { Parallax } from "react-parallax";
import FTCart from "../assets/icons/FTCart";
import FTButton from "../components/ui/FTButton";
import { Image } from "@nextui-org/react";
import FTGridProductCard from "../components/ui/FTGridProductCard";
import FTArrowRight from "../assets/icons/FTArrowRight";
import { Link } from "react-router-dom";
import categoriesData from "../assets/data/categories";

const mosaicImages = [
  {
    id: "1",
    rowSpan: 1,
    image:
      "https://images.unsplash.com/photo-1685633224597-294ff1adfd6f?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    rowSpan: 2,
    image:
      "https://images.unsplash.com/photo-1557127972-1c446ea89ea5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    rowSpan: 1,
    image:
      "https://images.unsplash.com/photo-1685633224306-2a2b37050713?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    rowSpan: 2,
    image:
      "https://images.unsplash.com/photo-1646495003511-5906221732be?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    rowSpan: 1,
    image:
      "https://images.unsplash.com/photo-1689876593463-6678f2e8d4f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    rowSpan: 2,
    image:
      "https://images.unsplash.com/photo-1649068610862-ed43a08442cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    rowSpan: 1,
    image:
      "https://images.unsplash.com/photo-1685633225077-820d5c7eb123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    rowSpan: 2,
    image:
      "https://images.unsplash.com/photo-1608947325823-976b1c65d14c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    rowSpan: 1,
    image:
      "https://images.unsplash.com/photo-1687350119840-3e2cc5977e92?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  return (
    <div>
      <Parallax
        bgImage="/hero-image.jpg"
        bgImageAlt="hero-image.jpg"
        strength={400}
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center min-h-[80vh]">
          <div className="bg-indigo-600/60 backdrop-blur-sm p-10 rounded-xl space-y-5">
            <h1 className="text-4xl text-white font-semibold">
              Fitness Gear Essentials to Enhance Your Training Experience
            </h1>
            <p className="text-base text-white">
              Discover our fitness gear essentials to elevate your training.
              High-performance equipment and versatile accessories to maximize
              your workouts and achieve your goals.
            </p>
            <FTButton
              size="lg"
              color="secondary"
              className="data-[hover=true]:!bg-white data-[hover=true]:text-indigo-600"
              startContent={
                <FTCart classNames={{ path: "stroke-indigo-600" }} />
              }
            >
              Shop Now
            </FTButton>
          </div>
        </div>
      </Parallax>

      <div className="container">
        <h2 className="text-3xl font-semibold mb-7 text-center">
          Explore Our{" "}
          <span className="text-indigo-500">Fitness Categories</span>
        </h2>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {categoriesData?.map((category) => (
            <div
              key={category?.key}
              className="group bg-white flex flex-col md:gap-3 justify-center items-center border border-slate-200 cursor-default rounded-lg p-5 active:scale-95 transition-all hover:ring hover:ring-indigo-600 hover:ring-offset-2 active:bg-slate-50 h-[121.6px] hover:h-[141.6px]"
            >
              <Image
                className="w-10 h-auto !opacity-60 hidden md:inline-block"
                src={category?.image}
              />
              <div>
                <h5 className="text-center text-lg font-semibold">
                  {category?.label}
                </h5>
                <Link className="text-indigo-600 invisible transition-all group-hover:visible text-sm flex items-center gap-2" to='/'>View Products</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h2 className="text-3xl font-semibold mb-7 text-center">
          Discover Our <span className="text-indigo-500">Top Picks</span>
        </h2>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FTGridProductCard />
        </div>
      </div>

      <div className="container grid gap-5 items-center grid-cols-1 md:grid-cols-2">
        <div className="order-1 md:order-2">
          <Image src="https://images.unsplash.com/photo-1626252346582-c7721d805e0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>

        <div className="order-2 md:order-1 space-y-3">
          <h3 className="text-3xl font-semibold">
            Start <span className="text-indigo-600">Your Fitness Journey</span>{" "}
            with Us
          </h3>
          <p className="text-slate-600 text-base">
            Discover the Advantages of Choosing Our Fitness Equipment Begin your
            path to a healthier, stronger you with our top-tier fitness
            equipment and accessories. Here's why joining our community of
            fitness enthusiasts will be the best decision you make:
          </p>
          <div>
            <p className="text-slate-800 text-base flex items-center gap-2">
              <FTArrowRight
                classNames={{ path: "stroke-indigo-600", svg: "w-4 h-4" }}
              />{" "}
              High Quality Equipment
            </p>
            <p className="text-slate-800 text-base flex items-center gap-2">
              <FTArrowRight
                classNames={{ path: "stroke-indigo-600", svg: "w-4 h-4" }}
              />{" "}
              Affordable Prices
            </p>
            <p className="text-slate-800 text-base flex items-center gap-2">
              <FTArrowRight
                classNames={{ path: "stroke-indigo-600", svg: "w-4 h-4" }}
              />{" "}
              Wide Variety of Products
            </p>
            <p className="text-slate-800 text-base flex items-center gap-2">
              <FTArrowRight
                classNames={{ path: "stroke-indigo-600", svg: "w-4 h-4" }}
              />{" "}
              Outstanding Customer Service
            </p>
            <p className="text-slate-800 text-base flex items-center gap-2">
              <FTArrowRight
                classNames={{ path: "stroke-indigo-600", svg: "w-4 h-4" }}
              />{" "}
              Innovative Features
            </p>
          </div>
          <FTButton
            size="lg"
            color="primary"
            endContent={<FTArrowRight classNames={{ path: "stroke-white" }} />}
          >
            Get Started?
          </FTButton>
        </div>
      </div>

      <div className="container">
        <h2 className="text-3xl font-semibold mb-7 text-center">
          Real Stories from{" "}
          <span className="text-indigo-600">Our Community</span>
        </h2>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center grid-flow-dense">
          {mosaicImages?.map(({ id, rowSpan, image }) => (
            <div
              key={id}
              id={id}
              className={`w-full h-full overflow-hidden rounded-lg`}
              style={{ gridRow: `span ${rowSpan}`}}
            >
              <img className="w-full h-full object-cover" src={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
