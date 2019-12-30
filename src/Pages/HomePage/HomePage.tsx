import React from 'react';
import './HomePage.css';
import DirectoryMenu from '../../Component/Directory/DirectoryMenu';
import MenuItem from '../../Component/MenuItem/MenuItem';

const HomePage = () => {
  return (
    <div className="HomePage">
        <DirectoryMenu superhero=""/>
    </div>
  );
}

export default HomePage;
