const ImgCard = (props) => {
  return (
    <div className="images-container relative flex-1 flex flex-wrap gap-2.5">
      {props.contentObj.length > 0
        ?
        props.contentObj.map((elem, idx) => {
          return <a href={elem.url} target="_blank" key={idx}>
            <div className="img-card relative w-60 h-48 rounded overflow-hidden">
              <img className="img w-full h-full object-cover" src={elem.download_url} />
              <p className="artist absolute top-0 left-0 w-full h-full translate-y-full text-center text-white text-2xl">{elem.author}</p>
            </div>
          </a>
        })
        :
        <h1 className="absolute top-1/2 left-1/2 -translate-1/2 text-4xl italic text-gray-400">Loading ...</h1>}
    </div>
  )
}

export default ImgCard