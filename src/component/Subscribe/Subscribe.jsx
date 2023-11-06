import subscribeMail from "../../../public/subscribe.png";
import SectionTitle from "../../SharedSmallComponent/SectionTitle";

const Subscribe = () => {
  return (
    <div className="max-w-[1000px] mx-auto font-ageo mb-[100px] mt-[-20px]">
      <div className="font-ageo w-full flex flex-col items-center justify-center mb-7">
        <SectionTitle section="Subscribe" title="Get Free Membership" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly gap-4">
        <div>
          <img
            src={subscribeMail}
            className="w-full max-w-[200px] md:max-w-[250px]"
            alt=""
          />
        </div>
        <div className="w-full max-w-[500px] flex items-center justify-center flex-col ">
          <p className="text-center md:text-left text-[#7d7d7d]">
            Unlock exclusive benefits by subscribing to our membership today.
            Join our community of like-minded enthusiasts and enjoy a world of
            premium content and special offers.
          </p>
          <input
            type="text"
            className="border shadow-lg rounded-full outline-none  w-full mt-7 mb-8 py-[10px] px-5 md:px-7 text-[18px] font-ageo"
            placeholder="Join with us using email"
          />
          <button className="text-base w-full bg-primary text-white tracking-wide py-[6px] px-[10px] rounded-[8px] font-medium font-dm shadow-md hover:bg-darkPrimary">
            Do Subscribe Photopic
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
