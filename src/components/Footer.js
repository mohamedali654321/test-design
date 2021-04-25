import React from 'react'
import styled from 'styled-components'

const FooterGroup=styled.div`
background-image:url(${props=>props.image});
height:250px ;
background-size:cover;
position:relative;
padding:220px 0;
/* align-items:center;
justify-content:center; */
display:grid;
grid-gap:20px;

`
const Text =styled.p`
position:relative;
font-size:24px;
font-weight:400;
color:white;
margin:0 auto;
max-width:500px;



`
const Button=styled.button`
position:relative;
background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color:white;
    padding:16px 60px;
    border:none;
    font-size:24px;
    font-weight:600;
    justify-self:center;
    transition:0.8s ;

    &:hover{
        box-shadow:0 20px 40px rgba(0, 0, 0, 0.15) ;
        transform:translateY(-5px);
        background:linear-gradient(294.13deg, #E0695B 10.62%, #3913B8 88.43%);
    }

`
const LinkGroup=styled.div`
position:relative;
display:grid;
grid-template-columns:repeat(2,1fr);
margin:50px auto ;
width:500px;
grid-gap:10px;


a{
    color:white;
    font-weight:200;
    transition:0.8s;
}
a:hover{
    color:black;
}

`
const CopyRight=styled.div`
color:rgba(255,255,255,.7);
margin:0 auto;
max-width:500px;
padding:0 20px;


a{
    color:white;
    font-weight:200;
}
`

const links=[
    {title:"Privacy" , url:"/"},
    {title:"Contact" , url:"/"},
    {title:"About" , url:"/"},
    {title:"Courses" , url:"/"},
    {title:"Home" , url:"/"},



]

function Footer(props) {
    return (
       <FooterGroup image={props.image}>
       
           <Text>
           
           Tweet “Prototype and build apps with React and Swift. New courses by @KnowldgeWare”
           </Text>
           <Button>Tweet</Button>
           <LinkGroup>
              {
                  links.map(link=>(
                      <a href={link.url}>{link.title}</a>
                  ))
              }
           </LinkGroup>
           <CopyRight>
           Backgrounds made in Cinema 4D, iOS app in Swift, site in React.<a href="mailto:support@kwareict.com">Email us</a> to ask anything. © 2021
           </CopyRight>
       </FooterGroup>
    )
}



export default Footer

