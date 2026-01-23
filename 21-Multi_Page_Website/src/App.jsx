import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Error404 from "./pages/Error404";

const App = () => {

  const stepObj = [
    {
      img: "./public/step-1.png",
      num: 1,
      title: "Al-Driven Security Solutions",
      descp: "Advanced surveillance, access control, and real-time threat detection powered by Al and machine learning"
    },
    {
      img: "./public/step-2.png",
      num: 2,
      title: "Smart Building Automation",
      descp: "Optimize energy usage, lighting, and climate control with intelligent automation for all type of spaces"
    },
    {
      img: "./public/step-3.png",
      num: 3,
      title: "Al Consulting and Integration",
      descp: "Custom Al-powered solutions to enhance security, efficiency, and decision-making in enterprises"
    },
    {
      img: "./public/step-4.png",
      num: 4,
      title: "Training, Support and Guidance",
      descp: "Expert training programs to help businesses maximize the potential of Al and security technologies"
    }
  ]

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col bg-[url('https://images.unsplash.com/photo-1638443523564-46b8a648c5a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center text-white bg-cover">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services cards={stepObj} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App