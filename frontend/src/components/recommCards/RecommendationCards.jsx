import StarIcon from "@mui/icons-material/Star";

const RecommendationCards = () => {
  return (
    <div className="px-7 my-[132px]">
      <p className="font-popp font-bold text-4xl mb-8">Recommended for you</p>
      <div className="w-full md:flex space-y-3 md:space-y-0 gap-3 md:justify-between items-center">
        <div className="md:w-[405px] shadow-[2px_4px_15px_0_rgba(133,133,167,0.25)] rounded-[20px] bg-white">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt=""
            className="h-[244px] w-full rounded-[20px] object-cover object-center"
          />
          <div className=" px-[23px]">
            <div className="flex justify-between items-center my-4">
              <p className=" font-popp font-bold text-xl">Michael Jackson</p>
              <p className=" font-popp font-bold text-xl">₹4,370</p>
            </div>
            <p className="font-popp ">
              I will do business evaluation and corporate services
            </p>
            <div className="flex items-center gap-1 mt-3 mb-[31px]">
              <StarIcon color="primary" />
              <span className=" font-popp font-bold  text-primary">4.8</span>
              <span className=" font-popp">(89)</span>
            </div>
            <div className=" pb-4">
            <button className=" w-full font-popp bg-primary text-white py-[10px] px-5 rounded-[10px] hover:bg-blue-400">
              View services{" "}
            </button>
            </div>
            
          </div>
        </div>
        {/* ....................... */}
        
        {/* ......................... */}
        
      </div>
    </div>
  );
};

export default RecommendationCards;
