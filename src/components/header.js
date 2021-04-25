import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import './header.css'
import StripeCheckout from 'react-stripe-checkout' 

class Header extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
       hasScroll:false
    }

  }

  

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll= (event)=>{
   const scrollTop = window.pageYOffset;
   if(scrollTop >50){
     this.setState({hasScroll:true})
   }
   else{
     this.setState({hasScroll:false})
   }

  }

render(){
return(
  <div className={this.state.hasScroll ? 'Header HeaderScrolled' : 'Header' }>
  <div className="HeaderGroup">
    <Link to="/"><img src={logo} /></Link>
    <Link to="/courses">كورسات</Link>
    <Link to="/downloads">التنزيلات</Link>
    <Link to="/workshops">ورش التدريب</Link>
    
    <Link to="/buy"><button> اشتراك </button></Link>
  </div>
</div>
)

}

}




export default Header


