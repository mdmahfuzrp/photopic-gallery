import { ToastContainer } from "react-toastify";
import Header from "../component/Header";
import OllyoGallery from "../component/OllyoGallery/OllyoGallery";
import OurVision from "../component/OurVision/OurVision";
import VideoPlayer from "../component/VideoPlayer/VideoPlayer";
import Subscribe from "../component/Subscribe/Subscribe";

const Home = () => {
  return (
    <div className="">
      <ToastContainer />
      <div>
        <Header />
      </div>
      <div className="mb-[100px]" id="gallery">
        <OllyoGallery />
      </div>
      <div>
        <OurVision />
        <VideoPlayer />
      </div>
      <div>
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
