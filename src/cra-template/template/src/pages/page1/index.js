import React from 'react'
import { NavPageContainer,Link } from 'react-windows-ui'

class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
    <NavPageContainer
      hasPadding={true}
      animateTransition={true}>

      <h1>Page 1</h1>
      <p>Start adding your fantastic ui here.</p>
      <Link>Components here</Link>
     
    </NavPageContainer>
  );
}
}

export default Page1