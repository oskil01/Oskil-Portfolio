
const IconLink = ({ title, description, path, icon }) => {
  const handleClick = () => {
    if (path.startsWith("http")) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = path;
    }
  };

  return (
    <div
      title="Cliquez pour me contacter" 
      onClick={handleClick} 
      className=" flex items-center gap-6 group cursor-pointer"
    > 
    {/* icones */}
     <div className="w-[52px] h-[52px] xl:w-[72px] 
        xl:h-[72px] bg-[#27272c] text-accent rounded-xl 
        flex items-center justify-center group-hover:text-white/80"
      >
        <div className="text-[28px]">{icon}</div> 
     </div>
     {/* infos */}
      <div className="flex-1">
        <p className="text-white/60">{title}</p>
        <h3 className="text-xl">{description}</h3>
      </div>
    </div>
  );
};

export default IconLink;
