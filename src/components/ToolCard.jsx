import "./ToolCard.css";

const ToolCard = ({ data }) => {
  const { image, name, text } = data;
  return (
    <div className="tool-card p-6 bg-[#ffffff] rounded-md shadow-lg hover:bg-[#f5f5fa] duration-300">
      <div className="flex sm:flex-col flex-row sm:items-start items-center">
        <img src={image} alt={name} className="h-12 w-12 mb-4 sm:mr-0 mr-4" />
        <h3 className="font-semibold text-[#33333B] text-xl mb-2">{name}</h3>
      </div>

      <p className="text-[#707078] tracking-wide text-[14px]">{text}</p>
    </div>
  );
};

export default ToolCard;
