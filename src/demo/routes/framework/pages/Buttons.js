import React from 'react'
import { Button,NavPageContainer } from '../../../../lib'

const Buttons = () => {
  return (
    <NavPageContainer hasPadding>

      <h1>Buttons</h1>

        <Button
          value="Default Button"/>
        <br/><br/>
        <Button
          icon={<i className="icons10-plus"></i>}
          value="Default Button"/>
        &nbsp;&nbsp;
        <Button
          icon={<i className="icons10-plus"></i>}
          value=""/>
        <br/><br/>
        <Button
          disabled
          value="Disabled Button"/>
        &nbsp;&nbsp;
        <Button
          isLoading
          value="Loading Button"/>
       

      <h3 className="m-b-15">Primary</h3>
        <Button
          type="primary"
          value="Primary Button"/>
        &nbsp;&nbsp;
        <Button
          type="primary"
          icon={<i className="icons10-fantasy"></i>}
          value="Primary Button"/> 
        <br/><br/>
        <Button
          disabled
          type="primary"
          value="Disabled Button"/>
        &nbsp;&nbsp;
        <Button
          type="primary"
          isLoading
          value="Loading Button"/>
      


      <h3 className="m-b-15">Success</h3>
        <Button
          type="success"
          value="Success Button"/>
        &nbsp;&nbsp;
        <Button
          type="success"
          icon={<i className="icons10-checkmark"></i>}
          value="Success Button"/>
      

      <h3 className="m-b-15">Danger</h3>
        <Button
          type="danger"
          value="Danger Button"/>
        &nbsp;&nbsp;
        <Button
          type="danger"
          icon={<i className="icons10-cancel-2"></i>}
          value="Danger Button"/>

        <br/><br/><br/><br/>

        </NavPageContainer>
  );
}

export default Buttons
