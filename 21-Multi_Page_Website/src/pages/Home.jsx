import HeroContent from "../components/Home/HeroContent"
import HomeBtns from "../components/Home/HomeBtns"

const Home = () => {
  return (
    <div className="text-white flex-1 flex flex-col justify-end gap-10 px-12 pb-10">
      <HeroContent />
      <HomeBtns />
    </div>
  )
}

export default Home