import React from 'react'
import { NavPageContainer, AvatarView } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Img2 from '../../../assets/illustration/2.jpg'
import Img3 from '../../../assets/illustration/3.jpg'
import Img4 from '../../../assets/anim_avatar2.jpg'
import { AvatarViewImportCode, AvatarViewUsageCode, AvatarViewUsageLoadingCode } from './codes'
import PropsView from './props-view'

class AvatarViewDocs extends React.Component {

  render() {
    return (
    <NavPageContainer hasPadding animateTransition>
      <h1>AvatarView</h1>

    <div style={{display: "flex", alignItems: "center"}}>
      <AvatarView
        src={Img4}
        alt="Anime"
        size={140}
        tooltip="User"
      />
      &nbsp;&nbsp;
      <div style={{display: "grid"}}>
        <AvatarView
          src={Img2}
          size={70}
          tooltip="SpiderMan"
          showBadge
          badgeTooltip="online"
          badgeBackgroundColor={"#16ab9c"}
        />
        <div style={{height: 8}}></div>
        <AvatarView
          alt="Iron Man"
          size={65}
          showBadge={7}
          tooltip="IronMan"
        />
      </div>
    </div>
      
    

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AvatarViewImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <AvatarView
        size={85}
        src={Img2}  
        showDropShadow
      />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AvatarViewUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>
      <h2 className="m-tb-20">AvatarView <p className="app-code">with Badge</p> :</h2>

      <AvatarView
        src={Img3}
        size={80}
        showBadge
        tooltip="Different World"
        showDropShadow
        badgePosition='bottom'
        badgeTooltip="online"
        badgeBackgroundColor={"#16ab9c"}
      />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AvatarViewUsageLoadingCode}
      </SyntaxHighlighter>


      <h2>Props</h2>
      <PropsView/>


    <br/><br/><br/><br/><br/>
    </NavPageContainer>
    )
  }
}

export default AvatarViewDocs