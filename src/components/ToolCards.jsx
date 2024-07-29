import toolData from "../utils/toolsData";
import ToolCard from "./ToolCard";

const ToolCards = () => {
  return (
    <div className="grid w-[95%] lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 mx-auto gap-[6px] mt-14 mb-2">
      {toolData.map((each) => (
        <ToolCard data={each} key={each.id} />
      ))}
    </div>
  );
};

export default ToolCards;
