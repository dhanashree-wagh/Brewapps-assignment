import React from 'react';
import "./Header.css";
import  VerifiedIcon  from '@mui/icons-material/Verified';
function Header() {
  return <div className="header">
    <div className="header__head">
      Live Spaces
    </div>
    <div className="header__text">
    <VerifiedIcon className='icon'/>
    <p> All NFTs On cyber either belong to or were minted by their space creator.</p>
</div>
  </div>;
}

export default Header;
