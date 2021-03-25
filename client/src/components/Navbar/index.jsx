/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 20px 50px 20px 0px;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  text-decoration: none;
  background-image: linear-gradient(var(--color-text), white);
  background-position: 0% 90%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
  text-transform: uppercase;

  li:hover {
    background-size: 100% 2px;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: var(--color-text);
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? '40%' : '70%')};
  }
`;

const Overlay = styled.div`
  position: absolute;
  background-color: white;
  height: ${(props) => (props.open ? '91vh' : 0)};
  width: 100vw;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Navbar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/logo.svg"
              height={70}
              width={70}
              alt="Nanass"
            />
          </a>
        </Link>
        <Menu>
          <Item>
            <Link href="/concept">
              <a>Notre concept</a>
            </Link>
          </Item>
          <Item>
            <Link href="/user/order">
              <a>Mon profil</a>
            </Link>
          </Item>
          <Item>
            <Link href="#">
              <a>Déconnexion</a>
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link href="/concept">
              <a>Notre concept</a>
            </Link>
          </Item>
          <Item>
            <Link href="/user/order">
              <a>Mon profil</a>
            </Link>
          </Item>
          <Item>
            <Link href="#">
              <a>Déconnexion</a>
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navbar;
