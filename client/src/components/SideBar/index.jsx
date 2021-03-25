import React from 'react';
import Link from 'next/link';
import styles from './sidebar.module.scss';

const SideBar = ({ href, title }) => (
  <div className={styles.SideBar}>
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </div>
);

export default SideBar;
