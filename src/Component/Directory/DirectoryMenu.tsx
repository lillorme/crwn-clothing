import React, { Component }  from 'react';
import MenuItem from '../MenuItem/MenuItem';
import {connect} from 'react-redux';
import { format } from 'path';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import { createStructuredSelector} from 'reselect';
import { DirectoryMenuContainer } from './directory.styles';

const DirectoryMenu = (props:any) => {

  const {sections} = props;
  return(
    <DirectoryMenuContainer className="directory-menu">
      {
       sections.map((section:any, i:number) => (
          <MenuItem section={section} key={i}/>
        ))
      }
    </DirectoryMenuContainer>
  )
  
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
