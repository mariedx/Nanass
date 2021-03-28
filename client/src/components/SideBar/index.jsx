import React from 'react';
import Link from 'next/link';
import styles from './sidebar.module.scss';

const SideBar = ({ href, title }) => (
  <Link href={href}>
    <a>
      <div className={styles.SideBar}>
        {title}
      </div>
    </a>
  </Link>
);

export default SideBar;
