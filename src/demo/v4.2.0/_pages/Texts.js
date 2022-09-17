import React from 'react'
import { Link } from 'react-router-dom'
import { NavPageContainer, NavPageContainerRight } from '../_lib'

const Texts = () => {
  return (
    <NavPageContainer
      hasPadding
      animateTransition>

      <h1>Texts</h1>

        <h1>Heading1</h1>
        <h2>Heading2</h2>
        <h3>Heading3</h3>
        <h4>Heading4</h4>
        <h3>Heading5</h3>
        <h6>Heading6</h6>
            
          <h2>Heading No Margin</h2>
              <h3 className="m-0">Heading with no top and bottom margin</h3>
              
          
          <h3>Paragraph</h3>
              <p>This is paragraph used to display long text in your windows application.</p>
          
          <h3>Paragraph Success</h3>
              <p className="color-success">This is success paragraph used to display success text in your windows application.</p>
          
          <h3>Paragraph Danger</h3>
              <p className="color-danger">This is danger paragraph used to display danger text in your windows application.</p>
          
          <h3>Paragraph Light</h3>
              <p className="light">This is light paragraph used to display long text in your windows application.</p>
          

    <NavPageContainerRight>

      <h4 className="m-0">Right Section Container</h4>
        <p className="light">If you cant find the network you want select to show available networks to open the list of available networks</p>
      
      <Link to="#" className="app-link">Still cant connect? Open the troubleshooter</Link><br/>
  
      <h4>Related Settings</h4>
        <Link to="#" className="app-link">Change Adaptor option</Link><br/>
        <Link to="#" className="app-link">Change Advance sharing option</Link><br/>

      </NavPageContainerRight>

    </NavPageContainer>
  )
}

export default Texts