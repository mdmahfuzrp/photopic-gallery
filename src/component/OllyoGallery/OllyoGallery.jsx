import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BsFillImageFill } from "react-icons/bs";
import { MdLibraryAddCheck } from "react-icons/md";
import "./OllyoGallery.css";
import { toast } from "react-toastify";
import { TbStarFilled } from "react-icons/tb";
import SectionTitle from "../../SharedSmallComponent/SectionTitle";

const IMAGE_HOSTING_TOKEN = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;
console.log(IMAGE_HOSTING_TOKEN);
const GalleryImagesOrder = "galleryImageOrderList";

const OllyoGallery = () => {
  const { reset } = useForm();
  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_TOKEN}`;
  const [loading, setLoading] = useState(true);
  const [loadImage, setLoadImage] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);
  const [control, setControl] = useState(false);

  // Fetch all gallery images from the server
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://photopic-server.vercel.app/all_images"
        );
        setImages(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchImages();
  }, [control]);

  // New Image Upload From Here - Image Upload Functionality
  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      console.error("No selected image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    setLoadImage(true);

    try {
      const response = await fetch(imgHostingUrl, {
        method: "POST",
        body: formData,
      });
      const imgResponse = await response.json();

      if (imgResponse.success) {
        // Update image file on server
        const imgURL = imgResponse.data.url;
        const updateImageFile = {
          imgURL,
          isChecked: false,
        };

        const uploadImage = async () => {
          try {
            const response = await axios.post(
              "https://photopic-server.vercel.app/new_image",
              updateImageFile
            );
            if (response.data.insertedId) {
              toast("Image upload successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              reset();
              setControl(!control);
              setLoadImage(false);
            }
          } catch (err) {
            console.error(err);
            setLoadImage(false);
          }
        };

        uploadImage();
      }
    } catch (error) {
      console.error("Error uploading image.");
      setLoadImage(false);
    }
  };

  // Image Selected Functionality - Set True False Based on Checked or Not
  const handleSelectedImage = (e, id) => {
    const updatedImages = images.map((image) => {
      if (image._id === id) {
        image.isChecked = e.target.checked;
      }
      return image;
    });

    setImages(updatedImages);
    setSelectedImage(updatedImages.filter((image) => image.isChecked));
  };

  // Selected Image Delete Functionality Here
  const handleDeleteFiles = async () => {
    const selectedImageIds = selectedImage.map((image) => image._id);

    try {
      const response = await axios.delete(
        "https://photopic-server.vercel.app/delete_gallery_images",
        {
          data: selectedImageIds,
        }
      );

      await toast.promise(Promise.resolve(response), {
        pending: "Deleting gallery image...",
        success: "Images deleted successfully!",
        error: (data) => `Error: ${data.message}`,
      });

      if (response.status === 200 && response.data?.result?.deletedCount) {
        const updatedImages = images.filter(
          (image) => !selectedImageIds.includes(image._id)
        );
        setImages(updatedImages);
        setSelectedImage([]);
        setControl(!control);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Load saved image order from localStorage
  useEffect(() => {
    const savedOrder = localStorage.getItem(GalleryImagesOrder);

    if (savedOrder) {
      setImages(JSON.parse(savedOrder));
    }
  }, []);

  // Update image order and save in localStorage
  const updateImageOrder = (newOrder) => {
    setImages(newOrder);
    localStorage.setItem(GalleryImagesOrder, JSON.stringify(newOrder));
  };

  // Handle drag start event
  const onDragStart = (image) => {
    setDraggedImage(image);
  };

  // Handle drag over event
  const onDragOver = (e, image) => {
    e.preventDefault();

    if (draggedImage === image) {
      return;
    }

    const currentIndex = images.indexOf(draggedImage);
    const targetIndex = images.indexOf(image);

    const newImages = [...images];
    newImages.splice(currentIndex, 1);
    newImages.splice(targetIndex, 0, draggedImage);

    updateImageOrder(newImages);
  };

  // Handle drop event
  const onDrop = () => {
    setTimeout(() => {
      setDraggedImage(null);
    }, 300);
  };

  if (loading) {
    return (
      <div className="max-w-[1300px] mx-auto">
        <div className="font-ageo w-full flex flex-col items-center justify-center mb-5">
          <SectionTitle section="Gallery" title="Gallery Functionality" />
          <p className="font-ageo font-medium text-base text-gray-600 tracking-wider flex items-center justify-center gap-2">
            <span>Upload</span>{" "}
            <small className="text-primary mt-[-3px]">
              <TbStarFilled />
            </small>{" "}
            <span>Drag & Drop</span>{" "}
            <small className="text-primary mt-[-3px]">
              <TbStarFilled />
            </small>{" "}
            <span>Re-Order</span>{" "}
            <small className="text-primary mt-[-3px]">
              <TbStarFilled />
            </small>{" "}
            <span>Delete</span>
          </p>
        </div>
        <div className="mb-4">
          <div>
            <h1 className="text-base md:text-[20px] font-semibold font-ageo text-primary">
              Gallery
            </h1>
          </div>
        </div>
        <div className="absolute w-full left-0">
          <hr className="border" />
        </div>

        <span className="galleryLoader"></span>
      </div>
    );
  }

  return (
    <div className="max-w-[1300px] mx-auto font-dm mt-[-45px]">
      <div className="font-ageo w-full flex flex-col items-center justify-center mb-5">
        <SectionTitle section="Gallery" title="Gallery Functionality" />
        <p className="font-ageo font-medium text-base text-gray-600 tracking-wider flex items-center justify-center gap-2">
          <span>Upload</span>{" "}
          <small className="text-primary mt-[-3px]">
            <TbStarFilled />
          </small>{" "}
          <span>Drag & Drop</span>{" "}
          <small className="text-primary mt-[-3px]">
            <TbStarFilled />
          </small>{" "}
          <span>Re-Order</span>{" "}
          <small className="text-primary mt-[-3px]">
            <TbStarFilled />
          </small>{" "}
          <span>Delete</span>
        </p>
      </div>
      <div className="mb-4">
        {selectedImage.length > 0 ? (
          <div className="flex justify-between items-center">
            <h1 className="text-base md:text-xl text-[#333] font-semibold flex gap-2 items-center">
              <span className="text-primary">
                <MdLibraryAddCheck />
              </span>
              <span>
                {selectedImage.length}{" "}
                <span className="font-ageo">Files Selected</span>
              </span>
            </h1>
            <button
              onClick={handleDeleteFiles}
              className="text-white bg-primary text-base lg:text-[18px] font-ageo font-medium py-[6px] px-3 rounded-full shadow-primaryShadow hover:bg-darkPrimary duration-150 tracking-wide"
            >
              Delete File
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-base md:text-[20px] font-semibold font-ageo text-primary">
              Gallery
            </h1>
          </div>
        )}
      </div>
      <div className="absolute w-full left-0">
        <hr className="border" />
      </div>
      <div className="max-w-[1300px] mx-auto my-4 mt-[45px]">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {images.map((image) => (
              <div
                key={image._id}
                draggable={true}
                onDragStart={() => onDragStart(image)}
                onDragOver={(e) => onDragOver(e, image)}
                onDrop={onDrop}
                className={`border w-full relative rounded-[10px] overflow-hidden
                  flex justify-center items-center group cursor-grab 
                  ${
                    images[0]?._id === image._id &&
                    "md:col-span-2 md:row-span-2"
                  }
                  ${draggedImage ? "moving" : ""}
                `}
              >
                <img
                  style={{
                    height: `${images[0]._id === image._id ? "100%" : "200px"}`,
                    objectFit: "contain",
                    width: "auto",
                    borderRadius: "20px",
                  }}
                  className="w-full h-full p-5 "
                  src={image.imgURL}
                  alt=""
                />
                <div
                  className={`${
                    image.isChecked
                      ? "bg-opacity-20 transition-all duration-500"
                      : "hidden bg-opacity-60"
                  } group-hover:block items-center justify-center absolute inset-0 bg-black transition-all  p-2`}
                >
                  <input
                    onChange={(e) => handleSelectedImage(e, image._id)}
                    type="checkbox"
                    defaultChecked={image.isChecked}
                    className="mr-2 ml-3 mt-3 cursor-pointer border-2 rounded-md border-primary w-[20px] h-[20px] !bg-primary"
                  />
                </div>
              </div>
            ))}
            <div className="relative h-full border-2 border-gray-400 bg-gray-200 border-dashed rounded-[10px] text-gray-500">
              <label
                htmlFor="file-upload"
                className="py-[80px] cursor-pointer flex justify-center items-center flex-col"
              >
                <BsFillImageFill></BsFillImageFill>
                <span>
                  {loadImage
                    ? "Your Photo is Uploading..."
                    : "Click to Upload Photo"}
                </span>
              </label>

              <input
                id="file-upload"
                type="file"
                className="custom-file-input hidden"
                name="image"
                onChange={handleFileUpload}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OllyoGallery;
