import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const CellGroup=styled.div`
display:grid;
grid-template-columns:60px auto;
grid-gap:35px;
align-items:center;


`
const CellImage=styled.div`
width:60px;
height:60px;
background:#9B51E0;
border-radius:10px;
background-image:url(${props=> props.image});
background-size:60px;
transition:1s ;
:hover{
    transform:translateY(-20px)
}

`
const CellTitle=styled.div`
font-size:24px;
border-bottom: 1px solid rgba(0,0,0,0.1);
padding:40px 0 ;
`
function Cell(props) {
    return (
       <CellGroup>
      
           <CellImage image={props.image}></CellImage>
           
           <CellTitle>{props.title}</CellTitle>
           
       </CellGroup>
    )
}



export default Cell

