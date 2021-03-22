/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import styles from './navbar.module.scss';

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

const Item = styled.li``;

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
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? '40%' : '70%')};
  }
`;

const Overlay = styled.div`
  position: absolute;
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
              className={styles.Navbar__logo}
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
            <Link href="/profil">
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
            <Link href="/profile">
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
