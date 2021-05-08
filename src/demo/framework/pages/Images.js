import React from 'react'
import { NavPageContainer,NavPageContainerInner,Accordion,
         ImageView,AvatarView, Button } from '../../../lib'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import IronMan from '../../img/illustration/ironman.jpg'
import Img2 from '../../img/illustration/2.jpg'
import Img3 from '../../img/illustration/3.jpg'
import Img4 from '../../img/illustration/5.jpg'

import {AvatarViewCode,ImageViewCode} from './codes/images'

class Images extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        stateLoadingImg: false
    }
  }

  setLoading = () => { this.setState({stateLoadingImg: true}) }
  setRegular = () => { this.setState({stateLoadingImg: false}) }

  render() {

  return (
    <NavPageContainer>
   
      <ImageView
        src={IronMan}
        width={'100%'}
        height={'280px'}
        insetShadow
        title="IronMan"
        subtitle="Mark 50 combat armor"
      />

      <NavPageContainerInner>

        <h3 className="m-b-15">AvatarView</h3>

        <div className="app-flex app-align-center">

          <AvatarView
              src={IronMan}
              size="large"
              showDropShadow/>

              &nbsp;&nbsp;

          <div className="app-grid">

            <AvatarView
                src={Img3}
                size="medium"
                isLoading
                showDropShadow/>

            &nbsp;

            <AvatarView
                size="small"
                src={Img2}      
                showDropShadow/>

            </div>
        </div>

        <br/><br/>
        <Accordion title="💻 Code - AvatarView" focused width={320}>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {AvatarViewCode}
          </SyntaxHighlighter>
        </Accordion>

        <h3 className="m-b-15">ImageView</h3>

        <ImageView
          src={Img4}
          width={'228px'}
          height={'200px'}
          borderRadius={18}
          title="Skrillex"
          isLoading={this.state.stateLoadingImg}
        />
        <br/><br/>

        <Button
          value="set Loading"
          type="primary"
          onClick={this.setLoading}/>
        &nbsp;
        <Button
          value="set Regular"
          type="primary-outline"
          onClick={this.setRegular}/>

        <br/><br/>
        <Accordion title="💻 Code - ImageView" focused width={320}>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {ImageViewCode}
          </SyntaxHighlighter>
        </Accordion>

      </NavPageContainerInner>

      <br/><br/><br/><br/>

    </NavPageContainer>
  )
}
}

export default Images