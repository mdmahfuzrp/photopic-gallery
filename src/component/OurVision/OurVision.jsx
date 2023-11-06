import SectionTitle from "../../SharedSmallComponent/SectionTitle";
import { Gallery, Security, VideoPlayer } from "../../assets/icons";

const OurVision = () => {
  const serviceItem = (
    <>
      <div className="shadow-xl  border border-[#f4f3f359] rounded-[15px] p-10 flex flex-col items-center justify-center">
        <Gallery />
        <h1 className="text-[20px] mt-4 lg:text-[22px] font-bold">
          Aesthetic Gallery
        </h1>
        <p
          className="text-base text-[#7d7d7d] tracking-wide text-center mb-3
            "
        >
          Discover the captivating world of aesthetic beauty with our curated
          gallery, where art and elegance converge to inspire and delight.
        </p>
        <button className="text-base bg-primary text-white tracking-wide py-[4px] px-[10px] rounded-[6px] shadow-md hover:bg-darkPrimary">
          Learn More
        </button>
      </div>

      <div className="shadow-xl  border border-[#f4f3f359] rounded-[15px] p-10 flex flex-col items-center justify-center">
        <VideoPlayer />
        <h1 className="text-[20px] mt-4 lg:text-[22px] font-bold">
          Video Player
        </h1>
        <p
          className="text-base tracking-wide text-[#7d7d7d] text-center mb-3
            "
        >
          Experience seamless entertainment with our state-of-the-art video
          player, bringing your favorite content to life with crystal-clear
          quality and user-friendly controls.
        </p>
        <button className="text-base bg-primary text-white tracking-wide py-[4px] px-[10px] rounded-[6px] shadow-md hover:bg-darkPrimary">
          Learn More
        </button>
      </div>

      <div className="shadow-xl border border-[#f4f3f359] rounded-[15px] p-10 flex flex-col items-center justify-center">
        <Security />
        <h1 className="text-[20px] mt-4 lg:text-[22px] font-bold">Security</h1>
        <p
          className="text-base text-[#7d7d7d] tracking-wide text-center mb-3
            "
        >
          Your protection is our priority. With our comprehensive security
          services, we offer round-the-clock safety, ensuring a secure
          environment for your home or business.
        </p>
        <button className="text-base bg-primary text-white tracking-wide py-[4px] px-[10px] rounded-[6px] shadow-md hover:bg-darkPrimary">
          Learn More
        </button>
      </div>
    </>
  );
  return (
    <div className="max-w-[1300px] mx-auto font-ageo">
      <SectionTitle section="Service" title="Our Vision & Our Goal" />
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {serviceItem}
      </div>
    </div>
  );
};

export default OurVision;
