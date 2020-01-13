import React from 'react';

import DirectoryMenu from '../../Component/Directory/DirectoryMenu';
import {HomePageContainer} from './homepage.styles';

import { format } from 'path';

const HomePage = () => {
  return (
    <HomePageContainer>
        <DirectoryMenu superhero=""/>
    </HomePageContainer>
  );
}

export default HomePage;
