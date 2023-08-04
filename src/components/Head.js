import React , { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice' ;
import { useSelector } from 'react-redux';

function Head() {
  const [burgerStatus, setBurgerStatus] = useState(false) ;
  const cars = useSelector(selectCars)

  return (
    <Container>
      <img src="/images/logo.svg" alt="" />

      <Menu>
        {cars && cars.map((car , index)=>(
          <a key={index} href="#">{car}</a>
        ))}
        
      </Menu>

      <RightMenu>
        <a href = "#">Shop</a>
        <a href="#"> Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrap>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrap>
        
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Saved Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">CyberTruck</a></li>
      </BurgerMenu>
    </Container>
  )
}

export default Head

const Container = styled.div`
  min-height: 60px ;
  position: fixed ;
  display: flex ;
  align-items: center ;
  justify-content:space-between ;
  padding: 0 20px ;
  width: 100% ;
  z-index:1 ;
`
const Menu = styled.div`
  display: flex ;
  align-items: center ;
  justify-content: center ;
  flex : 1 ;

  a {
    font-weight: 600 ;
    text-transform: uppercase ;
    padding : 0 10px ;
    flex-wrap: nowrap ;
  }

  @media(max-width:768px) {
    display:none ;
  }
`
const RightMenu = styled.div`
  display : flex ;
  align-items:center ;
  a {
    font-weight: 600 ;
    text-transform: uppercase ;
    margin-right: 10px ;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor:pointer ;
`
const BurgerMenu = styled.div`
  position:fixed ;
  top:0 ;
  right:0 ;
  bottom:0 ;
  width:300px ;
  background-color:white ;
  z-index:16 ;
  list-style:none ;
  display:flex ;
  flex-direction:column ;
  text-align:start ;
  padding:20px ;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'} ;
  transition: transform 0.2s ease-in ;

  li {
    padding: 15px 0 ;
    border-bottom:1px solid rgba(0,0,0,.2) ;

    a {
      font-weight:600 ;
    }
  }
`
const CustomClose = styled(CloseIcon)`
  cursor:pointer ;
`
const CloseWrap = styled.div`
  display:flex ;
  justify-content:flex-end ;
`