import React from 'react';
import {withRouter} from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = (props: any) => {
  
  const { section, match, history } = props;
  const { title, imageUrl, linkUrl, ...otherProps} = section;

  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)} {...otherProps}>
     
      <BackgroundImageContainer className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
      <ContentContainer className="content">
          <ContentTitle className="title">{title}</ContentTitle>
          <ContentSubtitle className="subtitle">Shop Now</ContentSubtitle>
      </ContentContainer> 
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
