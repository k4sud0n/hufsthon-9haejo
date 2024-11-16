import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeIcon,Q_StorageIcon,FaceIdIcon,PersonIcon } from "../img/navIcon";
import React from "react";

const Container = styled.div`
  width: 100%;
  max-width: 390px;
  min-height: 100vh;
  margin: 0 auto;
  background: white;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 26.5%;
`;

const NavLink = styled(Link)`
color: ${(props) => (props.active ? "#3A00F9" : "#000")};
  font-size: 1.5rem;
  text-align: center;
  flex: 1;
  transition: color 0.3s;

  &:hover {
    color: #3A00F9; 
  }
`;

const NavItem = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    font-size:11px;
`;

const IconWrapper = styled.div`
  margin-bottom: 4px; 
`;

const Navbar = () => {
    const [activeNav, setActiveNav] = useState(1);
    const navItems = [
        { id:1, name: "사람", icon: PersonIcon, to: "/main" },
        { id:2, name: "나를 좋아하는", icon: Q_StorageIcon, to: "/interviewquestion" },
        { id:3, name: "채팅", icon: FaceIdIcon, to: "/interview" },   
    ];

    return (
        // <div className="relative">
        <Wrapper lassName="w-full">
            {navItems.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.to}
                    active={activeNav === item.id}
                    onClick={()=> setActiveNav(item.id)}
                >
                    <NavItem>
                        <IconWrapper><item.icon size="25px" /></IconWrapper>
                        <span>{ item.name}</span>  
                    </NavItem>
                </NavLink>
            ))}
        </Wrapper>
        // </div>

    );
};

export default Navbar;