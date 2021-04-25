import React from 'react'
import styled from 'styled-components'
import Waves from './Waves'



const SectionGroup = styled.div`
background: linear-gradient(294.13deg, #E0695B 10.62%, #3913B8 88.43%) ; 
background-size:cover;
height:720px;
display:grid;
grid-template-rows:300px auto ;
grid-gap:20px;
position:relative;
@media(max-width:640px)
{
    height:820px;
}

`

const SectionLogo = styled.img`
align-self:end;
width:128px;
margin:0px auto;

`

const SectionTitleGroup = styled.div`
display:grid;
grid-template-columns:300px auto;
margin:0 40px;
grid-gap:20px;
grid-template-rows: auto 100%;
@media(max-width:720px)
{
    grid-template-columns:repeat(1,1fr);
}

`
const SectionTitle = styled.h3`
color:white;
font-size:60px;
line-height:1.2;
margin:0;
@media(max-width:720px){
    font-size:40px;
}
`
const SectionText = styled.p`
color:white;


`
const WaveBottom = styled.div`
position:absolute;
width:100%;
bottom:-6px;
`
const WaveTop = styled.div`
position:absolute;
width:100%;
top:-6px;
transform:rotate(180deg);
`
function Section(props) {
    return (
        
          <SectionGroup image={props.image}>
            <WaveTop>
               <Waves/>
            </WaveTop>
            <WaveBottom>
             <Waves/>
          </WaveBottom>
            
          <SectionLogo src={props.logo}/>
          <SectionTitleGroup>
          <SectionTitle>{props.title}</SectionTitle>
          <SectionText>{props.text}</SectionText>


          </SectionTitleGroup>
          
        
        </SectionGroup>
        
    )
}

export default Section
