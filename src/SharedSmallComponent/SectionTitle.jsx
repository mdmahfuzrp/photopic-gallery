// It's a common title for all section

const SectionTitle = ({section, title}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-[16px] tracking-widest text-gray-400 font-medium uppercase">
        {section}
      </p>
      <h2 className="text-[25px] capitalize lg:text-[35px] font-bold text-secondary">
        
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
