import React from 'react';
import gitLogo from '../../assets/images/git.svg';
import pic from '../../assets/images/img.png';

export default function Footer() {
  return (
    <footer className="footer">
      2023 &copy;
      <img className="footer__logo" src={gitLogo} alt="git" />
      <img className="footer__logo" src={pic} alt="pic" />
    </footer>
  );
}
