import React from 'react'
import CardImage from './CardImage'
import CardBody from './CardBody'

const Card2 = () => {
  return (
    <div className="card" style={{width: "18rem"}}>
        {/* <img
          src="https://images.unsplash.com/photo-1498712964741-5d33ab9e5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=600"
         className="card-img-top"
          alt="..."
        /> */}
        <CardImage 
          imgSrc="https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" 
          imgAlt="..." 
          imgStyle="card-img-top" 
        />
        {/* <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div> */}
        <CardBody 
          cardTitle="Card 2" 
          cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content." 
        />
      </div>
  )
}

export default Card2