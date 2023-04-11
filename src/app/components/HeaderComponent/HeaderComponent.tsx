'use client'

import { Modal } from 'pwojtaszko-design';
import { useState } from 'react';
import { eraseCookie } from '../../helpers';
import Login from './Login';
import style from './header.module.scss'
import Link from 'next/link';

const HeaderComponent = () => {
  const [loginVisible, setLoginVisible] = useState(false);

  const handleLoginOpen = () => {
    setLoginVisible(true);
  };

  const handleLoginClose = () => {
    setLoginVisible(false);
  };

  const handleLogout = () => {
    eraseCookie('token');
  };

  const isLoggedIn = false;

  return (
    <div className={style.header}>
        <div className={style.title}>
          <Link href="/">Curriculum Vitae</Link>
        </div>
        <div className={style.login_button}>{!isLoggedIn && <a href="#" className="right-button" onClick={handleLoginOpen}>Login to edit</a>}</div>
        <Modal show={loginVisible} title={"Login to administrate"} onClose={handleLoginClose}>
            <Login onLogin={handleLoginClose} />
        </Modal>
    </div>
  );
}

export default HeaderComponent;
