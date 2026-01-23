const RightCards = (props) => {
  return (
    <div className="cards-Section w-1/2 flex flex-wrap gap-4 justify-center">

      {props.cards.map((elem, idx) => {
        return <div key={idx}>
          <div className="card w-64 h-[17rem] gap-2 rounded-xl justify-between flex flex-col p-2 text-black border-2 border-gray-300 transition-all hover:bg-gray-50 hover:scale-105">

            <div className="flex justify-between items-center pr-5">
              <img className="h-24" src={elem.img} alt="Image" />
              <p className="text-2xl font-bold bg-gray-100 px-3 py-1 rounded-full">{elem.num}</p>
            </div>

            <div className="flex flex-col justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {elem.title}
              </h3>
              <p className="text-sm">
                {elem.descp}
              </p>
            </div>

          </div>
        </div>
      })}

    </div>
  )
}

export default RightCards