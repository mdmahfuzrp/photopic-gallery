import videoplayer from "../../../public/videoplayer.png";
import './VideoPlayer.css'
import {AiFillPlayCircle} from 'react-icons/ai'
const VideoPlayer = () => {
  return (
    <div className="flex w-full mt-[60px] max-w-[1100px] mx-auto flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
      <div className="flex flex-col text-center md:text-left justify-between h-full w-full max-w-[450px] gap-4">
        <div>
          <h1 className="text-[20px] mt-4 lg:text-[22px] font-bold">
            Video Player Boost Your Vibes
          </h1>
          <p className="text-[#7d7d7d] mt-3 mb-3">
            Elevate your viewing experience with our premium video player,
            offering a sleek interface and customizable features for a cinematic
            journey right at your fingertips.
          </p>
        </div>
        <div>
          <button className="text-base font-medium border tracking-wide py-[4px] px-[15px] rounded-full hover:shadow-md duration-150">
            Explore
          </button>
        </div>
      </div>
      <div className="flex w-full max-w-[500px] relative">
        <img src={videoplayer} alt="" />

        <div className="absolute left-0 top-0 w-full h-full bg-[#00000079] rounded-lg flex items-center justify-center cursor-default">
          <span className="playerLoader"></span>
          <div className="absolute w-full h-full flex items-center justify-center"><AiFillPlayCircle className="text-primary cursor-pointer rounded-full  z-[2]" size={50} /></div>
          <div className="absolute w-full h-full flex items-center justify-center ">
            <div className="w-[20px] cursor-pointer h-[20px] bg-white z-[1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
