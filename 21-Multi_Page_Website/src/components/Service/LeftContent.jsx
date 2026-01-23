import Button from "./Button"
import HeroContent from "./HeroContent"

const LeftContent = () => {
  return (
    <div className="leftContent w-1/2 flex flex-col justify-between p-5">
      <HeroContent />
      <Button />
    </div>
  )
}

export default LeftContent