import React from 'react';

//Component
import Meta from '../shared/Meta';
import Menu from '../shared/Menu'

class BaseLayout extends React.Component {
  render(){
    let { children, nowPage } = this.props
    return (
      <>
        <Meta />
        {nowPage.slice(0,7) !== '/detail' && <Menu nowPage={ nowPage }/> }
        { children }
      </>
    )
  }
}

export default BaseLayout;
