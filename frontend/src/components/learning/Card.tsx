import React from 'react'

const Card = (props:any) => {
  return (
    <div>
        <div className="">
            <img src={props.imgSrc} alt="" />
        </div>
    </div>
  )
}

export default Card