import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useParams } from "react-router-dom";
import data from "../Data/data";
import { Button } from "react-scroll";

const RecommendationCards = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  // Shuffle the data array to get random recommendations
  const shuffledData = data.sort(() => Math.random() - 0.5);

  // Filter out the current item by name and pick the first 3 recommended items
  const recommendedDetails = shuffledData
    .filter((d) => d.name !== name)
    .slice(0, 3);

  return (
    <div className="px-7 my-[132px]">
      <p className="font-popp font-bold text-4xl mb-8">Recommended for you</p>
      <div className="w-full md:flex space-y-3 md:space-y-0 gap-3 md:justify-between items-center">
        {recommendedDetails.map((data, index) => (
          <div
            key={index}
            className="md:w-[405px] shadow-[2px_4px_15px_0_rgba(133,133,167,0.25)] rounded-[20px] bg-white"
          >
            <img
              src={data.image}
              alt=""
              className="h-[244px] w-full rounded-[20px] object-cover object-center"
            />
            <div className=" px-[23px]">
              <div className="flex justify-between items-center my-4">
                <p className=" font-popp font-bold text-xl">{data.name}</p>
                <p className=" font-popp font-bold text-xl">{data.price}</p>
              </div>
              <p className="font-popp ">
                I will do {data.about.services[0].toLowerCase()} and{" "}
                {data.about.services[1].toLowerCase()}
              </p>
              <div className="flex items-center gap-1 mt-3 mb-[31px]">
                <StarIcon color="primary" />
                <span className=" font-popp font-bold  text-primary">
                  {data.rating}
                </span>
                <span className=" font-popp">({data.reviewCount})</span>
              </div>
              <div className=" pb-4">
                <Button
                  className="w-full font-popp bg-primary text-white py-[10px] px-5 rounded-[10px] hover:bg-blue-400"
                  onClick={() => navigate(`/CaDetails/${data.name}`)}
                >
                  View services
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCards;
