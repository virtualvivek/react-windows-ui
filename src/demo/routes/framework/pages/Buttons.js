import React from 'react'
import {Button,NavPageContainer,ColorPickerItem} from '../../../../lib'

const Buttons = () => {
  return (
    <NavPageContainer hasPadding>

      <h1>Buttons</h1>

      <h3 className="m-b-15">Theme Pickers</h3>

      <ColorPickerItem 
        name="1"
        color="#6632a8"
        checked/>

      <ColorPickerItem 
        name="1"
        color="#881798"/>

      <ColorPickerItem 
        name="1"
        color="#744DA9"/>

      <ColorPickerItem 
        name="1"
        color="#785AA2"/>

      <ColorPickerItem 
        name="1"
        color="#0063B1"/>

      <ColorPickerItem 
        name="1"
        color="#0078D7"/>  

        <br></br>  

      <ColorPickerItem 
        name="1"
        color="#D29B0A"/>

      <ColorPickerItem 
        name="1"
        color="#E9860D"/>

      <ColorPickerItem 
        name="1"
        color="#F7630C"/>  

      <ColorPickerItem 
        name="1"
        color="#CA5010"/>

      <ColorPickerItem 
        name="1"
        color="#DA3B01"/>

      <ColorPickerItem 
        name="1"
        color="#D13438"/>        

      

        <br></br><br></br>

        <Button
          value="Default Button"/>
        &nbsp;&nbsp;
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
