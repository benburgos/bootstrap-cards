import React from 'react'
import Button from './Button'

const CardBody = (props) => {
  return (
    <div className="card-body">
        <h5 className="card-title">{ props.cardTitle }</h5>
        <p className="card-text">{ props.cardText }</p>
        <Button />
    </div>
  );
};

//export the component
export default CardBody