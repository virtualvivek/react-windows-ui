import React from 'react'
import {ListItem,NavPageContainer} from '../../../../lib'
import Img1 from '../../../img/illustration/1.jpg'
import Img2 from '../../../img/illustration/2.jpg'
import Img3 from '../../../img/illustration/3.jpg'

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

      <div className="app-hr"></div>

      <h3 className="m-b-15">Icon Box</h3>
      <ListItem 
        icon={<i className="icons10-contact-book bg-accent"></i>}
        title="Contacts"
        subtitle="5.6 MB"
        info="installed"
      />
      <ListItem 
        icon={<i className="icons10-news bg-accent"></i>}
        title="News"
        subtitle="12.0 MB"
        info="install"
      />
      <ListItem 
        icon={<i className="icons10-paypal bg-accent"></i>}
        title="Payments"
        subtitle="24 MB"
        info="install"
      />

    <br/>

    <div className="app-hr"></div>

      <h3 className="m-b-15">Icon</h3>
      <ListItem 
        icon={<i className="icons10-printer accent"></i>}
        title="Printer"
        subtitle="5.6 MB"
        info="installed"
      />
      <ListItem 
        icon={<i className="icons10-music accent"></i>}
        title="Music"
        subtitle="12.0 MB"
        info="install"
      />
      <ListItem 
        icon={<i className="icons10-usb accent"></i>}
        title="Drivers"
        subtitle="24 MB"
        info="install"
      />

    <br/><br/><br/><br/>

</NavPageContainer>
  );
}


export default Lists
