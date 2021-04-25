import React from 'react'
import Link from 'gatsby-link'
import './Card2.css'

function Card2(props) {
    return (
        <div>
        <div className="Card1">
        <div div className="img">
         <img src={props.image}/>
         <Link><img src={require('../images/like.svg')} className="like"/></Link> 
       </div>
         <div className="content">
             
         <h3>{props.title}</h3>
         
           <p >{props.text}</p>
           
            
          </div>


   
            <div className="cover">
               
                <figure className="front">
                   
                <div div className="img">
                  <img src={props.image}/>
                  </div>
                  <div className="content">
                  <h3 >{props.front}</h3>
                 <Link><img src={require('../images/like.svg')} className="like"/></Link> 
                    
                    </div>
                    
                </figure>

                <figure className="back">
                    
                </figure>

            </div>
                   </div>

        </div>
    )
}

export default Card2
