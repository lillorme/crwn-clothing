import React, { Component }  from 'react';
import './DirectoryMenu.css';
import MenuItem from '../MenuItem/MenuItem';
import {connect} from 'react-redux';
import { format } from 'path';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import { createStructuredSelector} from 'reselect';

const DirectoryMenu = (props:any) => {

  const {sections} = props;
  return(
    <div className="directory-menu">
      {
       sections.map((section:any, i:number) => (
          <MenuItem section={section} key={i}/>
        ))
      }
    </div>
  )
  
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
