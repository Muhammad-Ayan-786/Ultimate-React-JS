import { StepBack, StepForward } from "lucide-react"

const ButtonControler = (props) => {
  return (
    <div className="control flex items-center justify-evenly py-2 gap-8">

      <StepBack size={35} color="#6a7282"
        className="cursor-pointer active:scale-[0.85]"
        onClick={() => {
          if (props.page > 2) {
            props.setPage(prev => (prev <= 1 ? 1 : prev - 1))
            props.setContentObj([])
          }
        }} />

      <p className="font-bold text-4xl text-gray-700">
        <span className="text-2xl text-gray-500">Page</span> : {props.page - 1}
      </p>

      <StepForward size={35} color="#6a7282"
        className="cursor-pointer active:scale-[0.85]"
        onClick={() => {
          props.setPage(prev => (prev + 1))
          props.setContentObj([])
        }} />
    </div>
  )
}

export default ButtonControler