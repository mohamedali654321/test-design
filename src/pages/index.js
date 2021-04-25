import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Section from '../components/Section'
import Waves from '../components/Waves'
import staticData from '../../staticData.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
import Footer from '../components/Footer'
const SectionCaption = styled.p`
font-size:18px;
font-weight:600;
text-transform:uppercase;
text-align:center;
color:#94A4BA;
`
const SectionCellGroup=styled.div`
max-width:800px;
display:grid;
grid-template-columns:repeat(2,1fr);
margin:0 auto 100px;
grid-column-gap: 30px;
padding:0 20px;
@media (max-width:800){
  grid-template-columns:repeat(1,1fr);
}

`

const IndexPage = () => (
  
    <div className="Hero">
      <div className="HeroGroup">
      <h1>تقنيه<br/> المعارف للتجارة</h1>
      {/* <p>
        Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.
         
         

         </p> */}
         <p>
         مؤسسة تقنية المعارف للتجارة هي مؤسسة سعودية عربية تعمل في مجال تكامل النظم المتخصصة في تقنيات الوصول للمعلومة (Information Access Technologies) ثنائية اللغة للمؤسسات الحكومية والشركات.
         </p>
    
    <Link to="/page-2/">شاهد هذا الفيديو</Link>
    <div className="Logo">
      <img src={require('../images/logo-sketch.png')} width="50"/>
      <img src={require('../images/logo-figma.png')} width="50"/>
      <img src={require('../images/logo-studio.png')} width="50"/>
      <img src={require('../images/logo-framer.png')} width="50"/>
      <img src={require('../images/logo-react.png')} width="50"/>
      <img src={require('../images/logo-swift.png')} width="50"/>
    

    </div>
    <div className="Bubbles">
    <img src={require('../images/bubble.png')} />
    <img src={require('../images/bubble.png')} />
    <img src={require('../images/bubble.png')} />
    <img src={require('../images/bubble.png')} />
    <img src={require('../images/bubble.png')} />
    <img src={require('../images/bubble.png')} />
    <img src={require('../images/bubble.png')} />
    </div>
    <Waves/>
      </div>
      <div className="Cards">
        <h2>الكورسات </h2>
        <hr/>
        <h3>React كورسات</h3>
        <div className="CardGroup">
         
        <Card
        title="React for Designers"
        text="10 videos - 3 hours"
        image={require("../images/Motion_Design_in_After_Effects_200x150_cover_new.svg")}
        />
         <Card
        title="React for Designers"
        text="10 videos - 3 hours"
        image={require("../images/Design_and_Code_in_Framer_X_200x150_cover_new.svg")}
        />
         <Card
        title="React for Designers"
        text="10 videos - 3 hours"
        image={require("../images/Learn_ARKit_200x150_cover_new.svg")}
        />
         <Card
        title="React for Designers"
        text="10 videos - 3 hours"
        image={require("../images/Design_System_Figma_800x600_cover_new.svg")}
        />

      
        
        
        </div>
        <hr/>
        <h3>Figma كورسات</h3>
        <div className="CardGroup2">
           
           
          
        <Card2
        className="cart"
        title="Figma for Designers"
        text="10 videos - 3 hours"
        image={require("../images/Learn_Sketch_200x150_cover_new.svg")}
        front="Figma Part 1"
        />


<Card2
        title="Figma for Designers"
        text="10 videos - 3 hours"
        image={require("../images/Javascript_game_200x150_cover_new.svg")}
        front="Figma Part 2"
        />
         <Card2
        title="Figma for Designers"
        text="10 videos - 3 hours"
        image={require("../images/Learn_iOS_11_Design_200x150_cover_new.svg")}
        front="Figma Part 3"
        like={require("../images/like.svg")}
        />
        </div>
        
      </div>
        
      <Section
        image={require('../images/planes2.png')}
        logo={require('../images/logo-react.png')}
        title="التصميم باستخدام React"
        text="تعرف على كيفية إنشاء موقع حديث باستخدام React والمكتبات الأكثر كفاءة لعرض موقعك / منتجك على الإنترنت. تعرف على المكونات و Grid CSS والرسوم المتحركة والتفاعلات والبيانات الديناميكية باستخدام Contentful ونشر موقعك باستخدام Netlify."
      />

      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
      {
        staticData.cells.map(cell=>(
          <Cell
            title={cell.title}
            image={cell.image}
          />
        ))
      }
      </SectionCellGroup>

      <Footer
      image={require('../images/courses-wave1-light.svg')}
      />
      
      
    </div>
    
)

export default IndexPage
