import React from 'react'
import { NavPageContainer,NavPageContainerInner,
    ImageView,ButtonIcon,ListItem } from '../../lib/src'

import ImgBees from '../assets/illustration/bees.jpg'
import ImgAvatar from '../assets/anim_avatar.jpeg'
import Img4 from '../assets/illustration/4.jpg'
import Img5 from '../assets/illustration/5.jpg'

const BlogLayout = () => {
  return (
    <NavPageContainer>

    <ImageView
        src={ImgBees}
        width={'100%'}
        height={'250px'}
        insetShadow
    />

    <NavPageContainerInner>

        <h1 className="m-b-10"><b>Blog Title Here</b></h1>

        <div className="app-flex app-align-center">
            <ImageView
                src={ImgAvatar}
                width={'40px'}
                height={'40px'}
                borderRadius={50}
            />
            &nbsp;
            <h3>John Doe</h3>
            &nbsp;
            <p>2 May ・ 1 min read</p>
            &nbsp;
            <ButtonIcon icon={<i className="icons10-pencil"></i>}/>
            <ButtonIcon icon={<i className="icons10-trash"></i>}/>
        </div>

        <h2>Sub Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum hendrerit posuere. Nullam ex augue, 
            facilisis quis ultricies et, pharetra quis nunc. Fusce id sem finibus, posuere eros vel, consectetur nibh. 
            Quisque nec neque sed neque semper convallis. Pellentesque habitant morbi tristique senectus et netus et 
            malesuada fames ac turpis egestas. Pellentesque et diam non nisl cursus cursus. Nunc a mollis tortor. 
            Donec vehicula felis ac risus accumsan, tempor rhoncus velit consequat. Nulla elementum vel elit et sagittis. 
            Vestibulum eu auctor lacus. In lobortis placerat sem, quis porta tellus mollis eu. Donec auctor mollis condimentum. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque id posuere felis, 
            sit amet pretium nunc.
        </p>

        <p>
            Aenean porttitor velit at nisi gravida, a semper nulla consectetur. Praesent vitae elit purus. Donec ullamcorper, 
            ex quis tempor scelerisque, lacus lacus fermentum augue, a suscipit orci ex vitae justo. Aenean tincidunt quam viverra turpis 
            fringilla aliquam tristique in augue. Phasellus ac fringilla purus. Curabitur finibus massa eu mi ultricies rutrum. 
            Integer at ullamcorper odio. In hac habitasse platea dictumst. Maecenas at pellentesque risus. Praesent ut orci iaculis, bibendum mi at, 
            ultrices metus. Morbi ac erat magna. Curabitur auctor diam ut metus imperdiet accumsan.
        </p>

        <div className="app-hr"></div>

        <div className="app-flex">
            <ImageView
                src={ImgAvatar}
                width={'35px'}
                height={'35px'}
                borderRadius={50}
            />
            &nbsp;
            <textarea
                className="app-textarea"
                rows="4" cols="40"
                placeholder="Write a comment">
            </textarea>
        </div>

        <h3><b>Read Next</b></h3>

        <ListItem
            img={Img4}
            imgBorderRadius={50}
            imgAlt="avatar1"
            title="What is really the difference between Cookie, Session and Tokens."
            subtitle="Alex John ・ 28 April"
        />
        <ListItem
            img={Img5}
            imgBorderRadius={50}
            imgAlt="avatar2"
            title="How to Build a Blog in NextJS and Get a Perfect Lighthouse Score."
            subtitle="David Farukko ・ 1 May"
        />

        <div className="m-tb-20"></div>

   
    </NavPageContainerInner>

    </NavPageContainer> 
  )
}

export default BlogLayout