import { Bookmark } from "lucide-react"

const Card = (props) => {

  return (
    <div className="card">

      <div className="top">
        <img src={props.brandLogo} alt="Company Name" />
        <button>Save <Bookmark size={14} /></button>
      </div>

      <div className="center">
        <h3>{props.companyName} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>

        <div className="tag">
          <p>{props.tag1}</p>
          <p>{props.tag2}</p>
        </div>
      </div>

      <div className="bottom">
        <div>
          <p>${props.pay}/hour</p>
          <p>{props.location}</p>
        </div>

        <button>Apply Now</button>
      </div>

    </div>
  )
}

export default Card