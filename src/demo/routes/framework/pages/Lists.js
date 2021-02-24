import React from 'react'
import {ListItem,NavPageContainer} from '../../../../lib'
import Img1 from '../../../img/illustration/1.jpg'
import Img2 from '../../../img/illustration/2.jpg'
import Img3 from '../../../img/illustration/3.jpg'
import Img4 from '../../../img/illustration/4.jpg'

const Lists = () => {
  return (
    <NavPageContainer hasPadding>
      <h1>Lists</h1>

      <h3 className="m-b-15">Users</h3>
      <ListItem
        img={Img1}
        imgAlt="avatar1"
        title="User 1"
        subtitle="Web Developer"
        info="online"
      />
      <ListItem
        img={Img2}
        imgAlt="avatar2"
        title="User 2"
        subtitle="Data Anylist"
        info="online"
      />
      <ListItem
        img={Img3}
        imgAlt="avatar3"
        title="User 3"
        subtitle="iOS Developer"
        info="offline"
      />

    <br/>

    <h3 className="m-b-15">Users - <i>BorderRadius</i></h3>
      <ListItem
        img={Img4}
        imgBorderRadius={8}
        imgAlt="avatar1"
        title="Magenta Riddim"
        subtitle="5.6 MB"
        info="stream now"
      />
      <ListItem
        img={Img3}
        imgBorderRadius={8}
        imgAlt="avatar2"
        title="Different World"
        subtitle="12.0 MB"
        info="stream now"
      />
      <ListItem
        img={Img1}
        imgBorderRadius={8}
        imgAlt="avatar3"
        title="La Familia"
        subtitle="24 MB"
        info="stream now"
      />

    <br/>

      <div className="app-hr"></div>

      <h3 className="m-b-15">Simple</h3>

      <ListItem
        title="Contacts"
        subtitle="5.6 MB"
        info="installed"
      />
      <ListItem
        title="News"
        subtitle="12.0 MB"
        info="install"
      />
      <ListItem
        title="Payments"
        subtitle="24 MB"
        info="install"
      />

    <br/>


    <br/><br/><br/><br/>

</NavPageContainer>
  );
}

export default Lists