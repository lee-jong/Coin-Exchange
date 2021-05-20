import React from 'react';

//Component
import Meta from '../shared/Meta';
import Menu from '../shared/Menu'

class BaseLayout extends React.Component {
  render(){
    let { children } = this.props
    return (
      <>
        <Meta />
        <Menu />
        {children}
      </>
    )
  }
}

export default BaseLayout;
