import React from 'react'
import {NavPageContainer,NavPageContainerInner,
  ImageView,AvatarView} from '../../../../lib'
import IronMan from '../../../img/illustration/ironman.jpg'
import Img2 from '../../../img/illustration/2.jpg'
import Img3 from '../../../img/illustration/3.jpg'

const Images = () => {
  return (
    <NavPageContainer>

      
   
    <ImageView 
        src={IronMan}
        width={'100%'}
        height={'280px'}
    />

      <NavPageContainerInner>
        <h3 className="m-b-15">AvatarView</h3>

        <div className="app-flex-center">
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

      </NavPageContainerInner>

      <br/><br/><br/><br/>
    </NavPageContainer>
  );
}


export default Images
