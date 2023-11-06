import { ToastContainer } from "react-toastify";
import Header from "../component/Header";
import OllyoGallery from "../component/OllyoGallery/OllyoGallery";

const Home = () => {
  return (
    <div className="">
      <ToastContainer />
      <Header />
      <div className="mb-[100px]" id="gallery">
        <OllyoGallery />
      </div>
    </div>
  );
};

export default Home;
