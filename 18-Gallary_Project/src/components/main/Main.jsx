import Title from "./Title"
import ImgCard from "./ImgCard"
import ButtonControler from "./ButtonControler"

const Main = (props) => {

  return (
    <div className="main w-full flex-1 flex flex-col gap-1.5 py-3 px-10">

      {/* Main Title */}
      <Title />

      {/* Image Card */}
      <ImgCard contentObj={props.contentObj} />

      {/* Page Control Button */}
      <ButtonControler page={props.page} setPage={props.setPage} setContentObj={props.setContentObj} />

    </div>
  )
}

export default Main