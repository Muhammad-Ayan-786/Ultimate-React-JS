import React from 'react'

const Card = (props) => {
  console.log(props, props.user, props.age);

  return (
    <div className="card">
      <img src={props.pic} />
      <h1>{props.user}, {props.age}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card

/*
U get props as a object.
*/