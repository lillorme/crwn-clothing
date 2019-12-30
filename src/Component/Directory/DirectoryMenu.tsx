import React, { Component }  from 'react';
import './DirectoryMenu.css';
import MenuItem from '../MenuItem/MenuItem';
interface IProps {
  superhero: string;
}

interface Sections{
  title: string,
  imageUrl: string,
  id: number,
  linkUrl: string,
  size: string,
}

interface IState{
  sections: Sections[]
}

class DirectoryMenu extends Component<IProps, IState> {

  constructor(props: IProps){
    
    super(props);

    this.state = {

      sections : [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          size: 'samll',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          size: 'small',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          size: 'small',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
                                                                                   
    }
  }
  
  render(){
    return(
      <div className="directory-menu">
        {
          this.state.sections.map((section, i) => (
            <MenuItem section={section} key={i}/>
          ))
        }
      </div>
    )
  }
}

export default DirectoryMenu;
