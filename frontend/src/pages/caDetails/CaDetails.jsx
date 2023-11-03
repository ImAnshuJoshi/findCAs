import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import RecommendationCards from "../../components/recommCards/RecommendationCards";
import { useEffect, useState } from "react";
import data from "../../components/Data/data";
import { useParams } from "react-router-dom";

const CaDetails = () => {
  const { name } = useParams();
  console.log(name);
  const [details, setDetails] = useState([]);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      console.log(i);
      if (data[i].name.toLowerCase().replace(/\s/g, '') == name.toLowerCase().replace(/\s/g, '')) {
        console.log(data[i]);
        setNotFound(false);

        setDetails([data[i]]);
        break;
      }
      setNotFound(true);
    }
  }, [name]);

  if (notFound) {
    return (
      <div>
        <NavBar />
        <div className="h-[400px] flex items-center justify-center bg-gray-200">
          <p className="text-lg font-semibold text-gray-600">
            CA details for {name} not available.
          </p>
        </div>
        <RecommendationCards />

        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      {details.map((data, index) => (
        <div key={index} id="caData" className="px-7 py-7 md:flex w-full">
          <div className="md:w-2/5 mr-8 w-full">
            <p className="text-3xl font-popp font-bold">{data.name}</p>
            <p className=" text-xl font-popp pt-4 pr-4">
              I am here to provide my {data.intro}
            </p>
            <div className="flex items-center gap-1 my-8">
              <StarIcon color="primary" />
              <span className=" font-popp text-xl text-primary">
                {data.rating}
              </span>
              <span className=" font-popp text-xl">({data.reviewCount})</span>
            </div>
            <div className="w-full bg-white rounded-[20px] shadow-[2px_4px_15px_0_rgba(133,133,167,0.25)]">
              <div className="px-7">
                <div className=" flex items-center justify-between py-7">
                  <span className=" leading-8 font-popp text-xl">
                    {data.taskComplexity}
                  </span>
                  <span className=" font-popp text-2xl font-bold">
                    {data.price}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarMonth color="primary" className="" />
                  <span className=" font-popp text-xl">
                    {data.deliveryTime}
                  </span>
                </div>
                <div className=" my-6 flex justify-between gap-2 pb-[23px]">
                  <button className=" w-[220px] font-popp bg-primary text-white py-[10px] px-5 rounded-[10px] hover:bg-blue-400">
                    Request Proposal
                  </button>
                  <button className=" w-[220px] font-popp border-[1.5px] border-primary bg-white text-primary py-[10px] px-5 rounded-[10px] hover:bg-slate-400">
                    Chat with me
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] shadow-[2px_4px_15px_0_rgba(133,133,167,0.25)] md:mt-8 w-full  px-7">
              <p className=" font-popp text-4xl font-bold py-7">
                What people say?
              </p>
              <p className=" text-xl font-popp pb-7">
                I cannot express enough gratitude for the support{" "}
                {data.testimonial.text}
              </p>
            </div>
          </div>
          {/* .............................................. */}
          <div className="md:w-3/5 w-full md:my-0 my-8 ">
            <img
              src={data.image}
              alt=""
              className=" w-[733px] h-[412px] rounded-[20px] object-top object-cover"
            />
            <div>
              <p className="font-popp text-4xl font-bold my-8">
                About {data.name}
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="">
                  <p className="font-popp font-bold text-[#999] leading-[34px]">
                    FROM
                  </p>
                  <p className="font-popp text-xl leading-[34px]">
                    {data.about.from}
                  </p>
                </div>
                <div>
                  <p className="font-popp font-bold text-[#999] leading-[34px]">
                    PARTNER SINCE
                  </p>
                  <p className="font-popp text-xl leading-[34px]">
                    {data.about.partnerSince}
                  </p>
                </div>
                <div>
                  <p className="font-popp font-bold text-[#999] leading-[34px]">
                    AVERAGE RESPONSE TIME
                  </p>
                  <p className="font-popp text-xl leading-[34px]">
                    {data.about.averageResponseTime}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-popp font-bold text-[#999] leading-[34px] pt-8">
                  ABOUT
                </p>
                <p className=" font-popp text-xl">
                  I am a {data.about.description}.
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-8 ">
              <div>
                <p className="font-popp font-bold leading-8  text-[#999]">
                  SERVICES I OFFER
                </p>
                <ul className=" list-disc list-inside font-popp text-xl space-y-1">
                  {data.about.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>{service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-popp font-bold leading-8  text-[#999]">
                  WHY ME?
                </p>
                <ul className=" list-disc list-inside font-popp text-xl space-y-1">
                  {data.about.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
      <RecommendationCards />
      <Footer />
    </div>
  );
};

export default CaDetails;
