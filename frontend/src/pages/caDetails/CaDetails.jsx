import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import StarIcon from "@mui/icons-material/Star";
const caDetails = () => {
  return (
    <div>
      <NavBar />
      <div className="px-7 py-7 flex w-full">
        <div className="w-2/5 mr-8">
          <p className="text-3xl font-popp font-bold">Michael Jackson</p>
          <p className=" text-xl font-popp py-4 pr-4">
            I am here to provide my expertise in accounting and finance, which
            includes financial statements, economics, and auditing, all to
            assist you effectively
          </p>
          <div>
            <StarIcon color="primary" />
          </div>
        </div>
        {/* .............................................. */}
        <div className="w-3/5">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt=""
            className=" w-[733px] h-[412px]"
          />{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default caDetails;
