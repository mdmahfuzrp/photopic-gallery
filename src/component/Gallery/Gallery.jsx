const Gallery = () => {
  return (
    <div className=" mb-[50px] font-dm">
      <h1 className="text-[35px] font-ageo font-extrabold text-center">Ollyo Photo Gallery</h1>
      <div className="flex flex-col md:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-7 w-full">
          <div className="col-span-2">1234</div>
          <div className="col-span-5">
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
            <div className="col-span-2 border">1</div>
            <div className="col-span-2 border">2</div>
            <div className="col-span-2 border">3</div>
            <div className="col-span-2 border">4</div>
            <div className="col-span-2 border">5</div>
            <div className="col-span-2 border">6</div>
          </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10">
        <div className="col-span-2">1</div>
        <div className="col-span-2">2</div>
        <div className="col-span-2">3</div>
        <div className="col-span-2">4</div>
        <div className="col-span-2">5</div>
      </div>
    </div>
  );
};

export default Gallery;
