import Left from "../components/About/Left"
import Right from "../components/About/Right"

const About = () => {
  return (
    <div className="flex-1 flex gap-5 bg-zinc-950 p-4">
      <Left />
      <Right />
    </div>
  )
}

export default About