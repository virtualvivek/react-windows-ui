import React from 'react'
import { NavPageContainer,CommandBar,Button,InputSearchBox,ImageView } from '../../../../lib'
import Img from '../../../img/illustration/macos.jpg'


class CommandBarLayout extends React.Component {

  render() {
    return (
    <NavPageContainer hasPadding>
      <h1>CommandBar</h1>

      <CommandBar>
            <Button
                icon={<i className="icons10-share"></i>}
                value="Share"/>
            <Button
                icon={<i className="icons10-save"></i>}
                value="Save"/>
            <Button
                icon={<i className="icons10-more"></i>}
                value=""/>
            &nbsp;&nbsp; 
            <InputSearchBox 
                placeholder="Enter to Search"/>
            &nbsp;&nbsp;
        </CommandBar>

        <ImageView
          width={'95%'}
          height={'65vh'}
          borderRadius={18}
          src={Img}/>

        <div className="app-flex-center" style={{marginTop:-280,marginLeft:-20}}>
            <CommandBar
            position="relative"
            showDropShadow>
                <Button
                    icon={<i className="icons10-share"></i>}
                    value="Share"/>
                <Button
                    icon={<i className="icons10-pencil"></i>}
                    value="Edit"/>
                <Button
                    icon={<i className="icons10-trash"></i>}
                    value="Delete"/>    
                <Button
                    icon={<i className="icons10-save"></i>}
                    value="Save"/>
                <Button
                    icon={<i className="icons10-more"></i>}
                    value=""/>
            </CommandBar>
        </div>

        

    </NavPageContainer>
  );
  }
}

export default CommandBarLayout