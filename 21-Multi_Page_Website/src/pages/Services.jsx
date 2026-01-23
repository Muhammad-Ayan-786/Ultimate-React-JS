import LeftContent from "../components/Service/LeftContent";
import RightCards from "../components/Service/RightCards";

const Services = (props) => {
  return (
    <div className="flex-1 flex gap-5 p-4 bg-white">
      <LeftContent />
      <RightCards cards={props.cards} />
    </div >
  )
}

export default Services