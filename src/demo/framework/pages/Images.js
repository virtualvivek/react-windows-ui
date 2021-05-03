import React from 'react'
import { NavPageContainer,NavPageContainerInner,
         ImageView,AvatarView, Button } from '../../../lib'
import IronMan from '../../img/illustration/ironman.jpg'
import Img2 from '../../img/illustration/2.jpg'
import Img3 from '../../img/illustration/3.jpg'
import Img4 from '../../img/illustration/5.jpg'

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

      </NavPageContainerInner>

      <br/><br/><br/><br/>

    </NavPageContainer>
  )
}
}

export default Images