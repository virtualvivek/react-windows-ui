import React from 'react'
import { NavPageContainer,ImageView } from '../../../lib'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {NavBarCode,Page1Code} from './codes/navigation'
import NavigationPreview from '../../img/navigation_preview.JPG'

const Navigation = () => {
  return (
    <NavPageContainer hasPadding>
        <h1>Navigation Bar</h1>

        <ImageView
            src={NavigationPreview}
            width={'280px'}
            height={'auto'}
        />

        <h2>App.js</h2>

        <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code navigation">
            {NavBarCode}
        </SyntaxHighlighter>

        <h2>Page1.js</h2>

        <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code navigation">
            {Page1Code}
        </SyntaxHighlighter>

        <br/><br/>


    </NavPageContainer>
  )
}

export default Navigation