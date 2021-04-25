import React from 'react'
import Link from 'gatsby-link'
import './Card.css'

function Card(props) {
    return (
        <div>
        <div className="Card">
            

            
<div div className="img">
<img src={props.image}/>

</div>
<div className="content">
<h3>{props.title}</h3>

<p >{props.text}</p>
<Link><img src={require('../images/like.svg')} className="like"/></Link> 

</div>



 

            
        </div>

        </div>
    )
}

export default Card
