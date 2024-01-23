import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import '../../../common/styles/icons.css'

const IconsView = () => {
  return (
    <div>
      <h1 className="m-b-15">Icons</h1>

      <p><b>react-windows-ui</b> comes with the free <b>font</b> set of fluent icons.</p>

      <div className="app-alert-bar alert-secondary" role="alert">
        <div className="app-alert-bar-content">
          <span>If you are looking for an icon not available in this project take a look at complete </span>
          <span>icons at: <a className="app-link" target="_blank" rel="noopener noreferrer" href="https://master--628d031b55e942004ac95df1.chromatic.com/?path=/docs/concepts-developer-icons-icons-catalog--page">
            <b>@fluentui/react-icons</b>
          </a> • <a className="app-link" target="_blank" rel="noopener noreferrer" href="https://github.com/microsoft/fluentui-system-icons">
            <b>repository</b>
          </a>.</span>
        </div>
      </div>

      <h2>Import</h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {`import "react-windows-ui/icons/winui-icons.min.css";`}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <div style={{display: "flex", alignItems: "center"}}>
        <i className="icons10-home" style={{fontSize: 28, marginRight: 15}}></i>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {`<i className="icons10-home"></i>`}
        </SyntaxHighlighter>
      </div>

      <div style={{display: "flex", alignItems: "center"}}>
        <i className="icons10-car app-color-primary" style={{fontSize: 28, marginRight: 15}}></i>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {`<i className="icons10-car app-color-primary"></i>`}
        </SyntaxHighlighter>
      </div>

      <div style={{display: "flex", alignItems: "center"}}>
        <i className="icons10-checked app-color-success" style={{fontSize: 28, marginRight: 15}}></i>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {`<i className="icons10-checked app-color-success"></i>`}
        </SyntaxHighlighter>
      </div>

      <div style={{display: "flex", alignItems: "center"}}>
        <i className="icons10-bell-disabled app-color-danger" style={{fontSize: 28, marginRight: 15}}></i>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {`<i className="icons10-bell-disabled app-color-danger"></i>`}
        </SyntaxHighlighter>
      </div>


      <div className="app-hr"></div>

      <br/>
      <div className="glyph">
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-advertising"></i></span> 
          <pre className="inline"><code>icons10-advertising</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-airport"></i></span> 
          <pre className="inline"><code>icons10-airport</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-align-center"></i></span> 
          <pre className="inline"><code>icons10-align-center</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-align-justify"></i></span> 
          <pre className="inline"><code>icons10-align-justify</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-align-left"></i></span> 
          <pre className="inline"><code>icons10-align-left</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-align-right"></i></span> 
          <pre className="inline"><code>icons10-align-right</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-alphabet-sorting"></i></span> 
          <pre className="inline"><code>icons10-alphabet-sorting</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-alphabet-sorting-2"></i></span> 
          <pre className="inline"><code>icons10-alphabet-sorting-2</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-angle-down"></i></span> 
          <pre className="inline"><code>icons10-angle-down</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-angle-left"></i></span> 
          <pre className="inline"><code>icons10-angle-left</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-angle-right"></i></span> 
          <pre className="inline"><code>icons10-angle-right</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-angle-up"></i></span> 
          <pre className="inline"><code>icons10-angle-up</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-archive"></i></span> 
          <pre className="inline"><code>icons10-archive</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-area-chart"></i></span> 
          <pre className="inline"><code>icons10-area-chart</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-arrow-down"></i></span> 
          <pre className="inline"><code>icons10-arrow-down</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-arrow-left"></i></span> 
          <pre className="inline"><code>icons10-arrow-left</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-arrow-right"></i></span> 
          <pre className="inline"><code>icons10-arrow-right</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-arrow-up"></i></span> 
          <pre className="inline"><code>icons10-arrow-up</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-audio-file"></i></span> 
          <pre className="inline"><code>icons10-audio-file</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-baby"></i></span> 
          <pre className="inline"><code>icons10-baby</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-bank-card"></i></span> 
          <pre className="inline"><code>icons10-bank-card</code></pre> 
        </div> */}
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-bag"></i></span> 
          <pre className="inline"><code>icons10-bag</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-bar-chart"></i></span> 
          <pre className="inline"><code>icons10-bar-chart</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-barcode"></i></span> 
          <pre className="inline"><code>icons10-barcode</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-bed"></i></span> 
          <pre className="inline"><code>icons10-bed</code></pre> 
        </div> */}

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-bell"></i></span> 
          <pre className="inline"><code>icons10-bell</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-bell-disabled"></i></span> 
          <pre className="inline"><code>icons10-bell-disabled</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-binoculars"></i></span> 
          <pre className="inline"><code>icons10-binoculars</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-bookmark"></i></span> 
          <pre className="inline"><code>icons10-bookmark</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-box"></i></span> 
          <pre className="inline"><code>icons10-box</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-briefcase"></i></span> 
          <pre className="inline"><code>icons10-briefcase</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-brush"></i></span> 
          <pre className="inline"><code>icons10-brush</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-calendar"></i></span> 
          <pre className="inline"><code>icons10-calendar</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-calendar-month"></i></span> 
          <pre className="inline"><code>icons10-calendar-month</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-call"></i></span> 
          <pre className="inline"><code>icons10-call</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-calculator"></i></span> 
          <pre className="inline"><code>icons10-calculator</code></pre> 
        </div> */}
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-car"></i></span> 
          <pre className="inline"><code>icons10-car</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-chat"></i></span> 
          <pre className="inline"><code>icons10-chat</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-checked-filled"></i></span> 
          <pre className="inline"><code>icons10-checked-filled</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-camera"></i></span> 
          <pre className="inline"><code>icons10-camera</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-camera-switch"></i></span> 
          <pre className="inline"><code>icons10-camera-switch</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-cancel"></i></span> 
          <pre className="inline"><code>icons10-cancel</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-cast"></i></span> 
          <pre className="inline"><code>icons10-cast</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-color-palette"></i></span> 
          <pre className="inline"><code>icons10-color-palette</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-cross"></i></span> 
          <pre className="inline"><code>icons10-cross</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-chart"></i></span> 
          <pre className="inline"><code>icons10-chart</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-checked"></i></span> 
          <pre className="inline"><code>icons10-checked</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-checked-2"></i></span> 
          <pre className="inline"><code>icons10-checked-2</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-checkmark"></i></span> 
          <pre className="inline"><code>icons10-checkmark</code></pre> 
        </div>
      
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-clipboard"></i></span> 
          <pre className="inline"><code>icons10-clipboard</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-clip"></i></span> 
          <pre className="inline"><code>icons10-clip</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-clock"></i></span> 
          <pre className="inline"><code>icons10-clock</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-code-file"></i></span> 
          <pre className="inline"><code>icons10-code-file</code></pre> 
        </div> */}
  
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-columns"></i></span> 
          <pre className="inline"><code>icons10-columns</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-collection"></i></span> 
          <pre className="inline"><code>icons10-collection</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-compress"></i></span> 
          <pre className="inline"><code>icons10-compress</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-compose"></i></span> 
          <pre className="inline"><code>icons10-compose</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-controller"></i></span> 
          <pre className="inline"><code>icons10-controller</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-contact-book"></i></span> 
          <pre className="inline"><code>icons10-contact-book</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-copy"></i></span> 
          <pre className="inline"><code>icons10-copy</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-create-new"></i></span> 
          <pre className="inline"><code>icons10-create-new</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-crop"></i></span> 
          <pre className="inline"><code>icons10-crop</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-database"></i></span> 
          <pre className="inline"><code>icons10-database</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-desktop"></i></span> 
          <pre className="inline"><code>icons10-desktop</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-deathly-hallows"></i></span> 
          <pre className="inline"><code>icons10-deathly-hallows</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-dial"></i></span> 
          <pre className="inline"><code>icons10-dial</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-dialpad"></i></span> 
          <pre className="inline"><code>icons10-dialpad</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-dining-room"></i></span> 
          <pre className="inline"><code>icons10-dining-room</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-dismiss-filled"></i></span> 
          <pre className="inline"><code>icons10-dismiss-filled</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-drag-handle"></i></span> 
          <pre className="inline"><code>icons10-drag-handle</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-document"></i></span> 
          <pre className="inline"><code>icons10-document</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-down-squared"></i></span> 
          <pre className="inline"><code>icons10-down-squared</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-download"></i></span> 
          <pre className="inline"><code>icons10-download</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-expand-up-right"></i></span> 
          <pre className="inline"><code>icons10-expand-up-right</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-electrical"></i></span> 
          <pre className="inline"><code>icons10-electrical</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-electricity"></i></span> 
          <pre className="inline"><code>icons10-electricity</code></pre> 
        </div> */}

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-eraser"></i></span> 
          <pre className="inline"><code>icons10-eraser</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-emoji-smile"></i></span> 
          <pre className="inline"><code>icons10-emoji-smile</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-eye"></i></span> 
          <pre className="inline"><code>icons10-eye</code></pre> 
        </div> 
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-eye-closed"></i></span> 
          <pre className="inline"><code>icons10-eye-closed</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-exclamation-mark"></i></span> 
          <pre className="inline"><code>icons10-exclamation-mark</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-export"></i></span> 
          <pre className="inline"><code>icons10-export</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-explore"></i></span> 
          <pre className="inline"><code>icons10-explore</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-fantasy"></i></span> 
          <pre className="inline"><code>icons10-fantasy</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-warning-filled"></i></span> 
          <pre className="inline"><code>icons10-warning-filled</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-file"></i></span> 
          <pre className="inline"><code>icons10-file</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-file-explorer"></i></span> 
          <pre className="inline"><code>icons10-file-explorer</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-film"></i></span> 
          <pre className="inline"><code>icons10-film</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-filter"></i></span> 
          <pre className="inline"><code>icons10-filter</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-flag"></i></span> 
          <pre className="inline"><code>icons10-flag</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-fingerprint"></i></span> 
          <pre className="inline"><code>icons10-fingerprint</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-folder"></i></span> 
          <pre className="inline"><code>icons10-folder</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-football"></i></span> 
          <pre className="inline"><code>icons10-football</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-gauge"></i></span> 
          <pre className="inline"><code>icons10-gauge</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-generic-sorting"></i></span> 
          <pre className="inline"><code>icons10-generic-sorting</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-generic-sorting-2"></i></span> 
          <pre className="inline"><code>icons10-generic-sorting-2</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-fold"></i></span> 
          <pre className="inline"><code>icons10-fold</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-unfold"></i></span> 
          <pre className="inline"><code>icons10-unfold</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-grid"></i></span> 
          <pre className="inline"><code>icons10-grid</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-grid-2"></i></span> 
          <pre className="inline"><code>icons10-grid-2</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-grid-3"></i></span> 
          <pre className="inline"><code>icons10-grid-3</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-groove"></i></span> 
          <pre className="inline"><code>icons10-groove</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-hdd"></i></span> 
          <pre className="inline"><code>icons10-hdd</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-headphone"></i></span> 
          <pre className="inline"><code>icons10-headphone</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-heart"></i></span> 
          <pre className="inline"><code>icons10-heart</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-health"></i></span> 
          <pre className="inline"><code>icons10-health</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-home"></i></span> 
          <pre className="inline"><code>icons10-home</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-history"></i></span> 
          <pre className="inline"><code>icons10-history</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-idea"></i></span> 
          <pre className="inline"><code>icons10-idea</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-idea-close"></i></span> 
          <pre className="inline"><code>icons10-idea-close</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-image"></i></span> 
          <pre className="inline"><code>icons10-image</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-image-file"></i></span> 
          <pre className="inline"><code>icons10-image-file</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-import"></i></span> 
          <pre className="inline"><code>icons10-import</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-indent"></i></span> 
          <pre className="inline"><code>icons10-indent</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-info"></i></span> 
          <pre className="inline"><code>icons10-info</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-info-filled"></i></span> 
          <pre className="inline"><code>icons10-info-filled</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-table"></i></span> 
          <pre className="inline"><code>icons10-table</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-tablet"></i></span> 
          <pre className="inline"><code>icons10-tablet</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-phone"></i></span> 
          <pre className="inline"><code>icons10-phone</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-key"></i></span> 
          <pre className="inline"><code>icons10-key</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-keyboard"></i></span> 
          <pre className="inline"><code>icons10-keyboard</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-left-squared"></i></span> 
          <pre className="inline"><code>icons10-left-squared</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-level-down"></i></span> 
          <pre className="inline"><code>icons10-level-down</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-level-up"></i></span> 
          <pre className="inline"><code>icons10-level-up</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-library"></i></span> 
          <pre className="inline"><code>icons10-library</code></pre> 
        </div> */}
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-link"></i></span> 
          <pre className="inline"><code>icons10-link</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-list"></i></span> 
          <pre className="inline"><code>icons10-list</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-list-search"></i></span> 
          <pre className="inline"><code>icons10-list-search</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-lock"></i></span> 
          <pre className="inline"><code>icons10-lock</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-lock-open"></i></span> 
          <pre className="inline"><code>icons10-lock-open</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-location"></i></span> 
          <pre className="inline"><code>icons10-location</code></pre> 
        </div>
        
        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-location-point"></i></span> 
          <pre className="inline"><code>icons10-location-point</code></pre> 
        </div> */}

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-mastercard"></i></span> 
          <pre className="inline"><code>icons10-mastercard</code></pre> 
        </div> */}
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-map"></i></span> 
          <pre className="inline"><code>icons10-map</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-mail"></i></span> 
          <pre className="inline"><code>icons10-mail</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-maximize"></i></span> 
          <pre className="inline"><code>icons10-maximize</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-minimize"></i></span> 
          <pre className="inline"><code>icons10-minimize</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-minus"></i></span> 
          <pre className="inline"><code>icons10-minus</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-mic"></i></span> 
          <pre className="inline"><code>icons10-mic</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-mic-disabled"></i></span> 
          <pre className="inline"><code>icons10-mic-disabled</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-monitor"></i></span> 
          <pre className="inline"><code>icons10-monitor</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-more"></i></span> 
          <pre className="inline"><code>icons10-more</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-moon"></i></span> 
          <pre className="inline"><code>icons10-moon</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-mouse"></i></span> 
          <pre className="inline"><code>icons10-mouse</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-music"></i></span> 
          <pre className="inline"><code>icons10-music</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-music-playlist"></i></span> 
          <pre className="inline"><code>icons10-music-playlist</code></pre> 
        </div>
                  
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-music-record"></i></span> 
          <pre className="inline"><code>icons10-music-record</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-navigation"></i></span> 
          <pre className="inline"><code>icons10-navigation</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-network"></i></span> 
          <pre className="inline"><code>icons10-network</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-network-hotspot"></i></span> 
          <pre className="inline"><code>icons10-network-hotspot</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-network-connected"></i></span> 
          <pre className="inline"><code>icons10-network-connected</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-network-disconnected"></i></span> 
          <pre className="inline"><code>icons10-network-disconnected</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-network-tower"></i></span> 
          <pre className="inline"><code>icons10-network-tower</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-news"></i></span> 
          <pre className="inline"><code>icons10-news</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-notebook"></i></span> 
          <pre className="inline"><code>icons10-notebook</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-notification"></i></span> 
          <pre className="inline"><code>icons10-notification</code></pre> 
        </div>
          
        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-notification-image"></i></span> 
          <pre className="inline"><code>icons10-notification-image</code></pre> 
        </div> */}

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-numbered-list"></i></span> 
          <pre className="inline"><code>icons10-numbered-list</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-numerical-sorting"></i></span> 
          <pre className="inline"><code>icons10-numerical-sorting</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-numerical-sorting-2"></i></span> 
          <pre className="inline"><code>icons10-numerical-sorting-2</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-opened-folder"></i></span> 
          <pre className="inline"><code>icons10-opened-folder</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-organization"></i></span> 
          <pre className="inline"><code>icons10-organization</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-outdent"></i></span> 
          <pre className="inline"><code>icons10-outdent</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-parallel-tasks"></i></span> 
          <pre className="inline"><code>icons10-parallel-tasks</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-paste"></i></span> 
          <pre className="inline"><code>icons10-paste</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-pencil"></i></span> 
          <pre className="inline"><code>icons10-pencil</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-personalize"></i></span> 
          <pre className="inline"><code>icons10-personalize</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-phone-book"></i></span> 
          <pre className="inline"><code>icons10-phone-book</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-pie-chart"></i></span> 
          <pre className="inline"><code>icons10-pie-chart</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-pin"></i></span> 
          <pre className="inline"><code>icons10-pin</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-plus"></i></span> 
          <pre className="inline"><code>icons10-plus</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-printer"></i></span> 
          <pre className="inline"><code>icons10-printer</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-projector"></i></span> 
          <pre className="inline"><code>icons10-projector</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-puzzle"></i></span> 
          <pre className="inline"><code>icons10-puzzle</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-qr-code"></i></span> 
          <pre className="inline"><code>icons10-qr-code</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-question-mark"></i></span> 
          <pre className="inline"><code>icons10-question-mark</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-question-filled"></i></span> 
          <pre className="inline"><code>icons10-question-filled</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-refresh"></i></span> 
          <pre className="inline"><code>icons10-refresh</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-resize-diagonal"></i></span> 
          <pre className="inline"><code>icons10-resize-diagonal</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-expand"></i></span> 
          <pre className="inline"><code>icons10-expand</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-resize-horizontal"></i></span> 
          <pre className="inline"><code>icons10-resize-horizontal</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-resize-vertical"></i></span> 
          <pre className="inline"><code>icons10-resize-vertical</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-responsive"></i></span> 
          <pre className="inline"><code>icons10-responsive</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-right-squared"></i></span> 
          <pre className="inline"><code>icons10-right-squared</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-rotate-left"></i></span> 
          <pre className="inline"><code>icons10-rotate-left</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-rotate-right"></i></span> 
          <pre className="inline"><code>icons10-rotate-right</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-rupee"></i></span> 
          <pre className="inline"><code>icons10-rupee</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-save"></i></span> 
          <pre className="inline"><code>icons10-save</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-scanner"></i></span> 
          <pre className="inline"><code>icons10-scanner</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-scale"></i></span> 
          <pre className="inline"><code>icons10-scale</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-sdcard"></i></span> 
          <pre className="inline"><code>icons10-sdcard</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-search"></i></span> 
          <pre className="inline"><code>icons10-search</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-security-user"></i></span> 
          <pre className="inline"><code>icons10-security-user</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-security-issue"></i></span> 
          <pre className="inline"><code>icons10-security-issue</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-services"></i></span> 
          <pre className="inline"><code>icons10-services</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-settings"></i></span> 
          <pre className="inline"><code>icons10-settings</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-share"></i></span> 
          <pre className="inline"><code>icons10-share</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-open"></i></span> 
          <pre className="inline"><code>icons10-open</code></pre> 
        </div>
          
        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-sign-male"></i></span> 
          <pre className="inline"><code>icons10-sign-male</code></pre> 
        </div> */}
          
        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-sign-female"></i></span> 
          <pre className="inline"><code>icons10-sign-female</code></pre> 
        </div> */}

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-spy"></i></span> 
          <pre className="inline"><code>icons10-spy</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-speaker-0"></i></span> 
          <pre className="inline"><code>icons10-speaker-0</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-speaker-1"></i></span> 
          <pre className="inline"><code>icons10-speaker-1</code></pre> 
        </div>
                  
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-speaker-2"></i></span> 
          <pre className="inline"><code>icons10-speaker-2</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-speaker-3"></i></span> 
          <pre className="inline"><code>icons10-speaker-3</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-star"></i></span> 
          <pre className="inline"><code>icons10-star</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-student"></i></span> 
          <pre className="inline"><code>icons10-student</code></pre> 
        </div>
                
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-stopwatch"></i></span> 
          <pre className="inline"><code>icons10-stopwatch</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-support"></i></span> 
          <pre className="inline"><code>icons10-support</code></pre> 
        </div>
               
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-sun"></i></span> 
          <pre className="inline"><code>icons10-sun</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-sync"></i></span> 
          <pre className="inline"><code>icons10-sync</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-tags"></i></span> 
          <pre className="inline"><code>icons10-tags</code></pre> 
        </div> */}

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-tag"></i></span> 
          <pre className="inline"><code>icons10-tag</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-tasks"></i></span> 
          <pre className="inline"><code>icons10-tasks</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-text-width"></i></span> 
          <pre className="inline"><code>icons10-text-width</code></pre> 
        </div> */}

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-timeline"></i></span> 
          <pre className="inline"><code>icons10-timeline</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-terminal"></i></span> 
          <pre className="inline"><code>icons10-terminal</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-todo-list"></i></span> 
          <pre className="inline"><code>icons10-todo-list</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-toggle"></i></span> 
          <pre className="inline"><code>icons10-toggle</code></pre> 
        </div>
        
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-thermometer"></i></span> 
          <pre className="inline"><code>icons10-thermometer</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-translation"></i></span> 
          <pre className="inline"><code>icons10-translation</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-trash"></i></span> 
          <pre className="inline"><code>icons10-trash</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-undo"></i></span> 
          <pre className="inline"><code>icons10-undo</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-up-squared"></i></span> 
          <pre className="inline"><code>icons10-up-squared</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-upload"></i></span> 
          <pre className="inline"><code>icons10-upload</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-us-dollar"></i></span> 
          <pre className="inline"><code>icons10-us-dollar</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-usb"></i></span> 
          <pre className="inline"><code>icons10-usb</code></pre> 
        </div>   
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-user"></i></span> 
          <pre className="inline"><code>icons10-user</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-user-female"></i></span> 
          <pre className="inline"><code>icons10-user-female</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-user-add"></i></span> 
          <pre className="inline"><code>icons10-user-add</code></pre> 
        </div>   
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-user-remove"></i></span> 
          <pre className="inline"><code>icons10-user-remove</code></pre> 
        </div>

        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-user-girl"></i></span> 
          <pre className="inline"><code>icons10-user-girl</code></pre> 
        </div> */}
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-user-group"></i></span> 
          <pre className="inline"><code>icons10-user-group</code></pre> 
        </div>
          
        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-user-settings"></i></span> 
          <pre className="inline"><code>icons10-user-settings</code></pre> 
        </div>
          
        {/* <div className="preview-glyphs"> <span className="size-60"><i className="icons10-user-switch"></i></span> 
          <pre className="inline"><code>icons10-user-switch</code></pre> 
        </div> */}

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-video"></i></span> 
          <pre className="inline"><code>icons10-video</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-video-clip"></i></span> 
          <pre className="inline"><code>icons10-video-clip</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-web-cam"></i></span> 
          <pre className="inline"><code>icons10-web-cam</code></pre> 
        </div>

        <div className="preview-glyphs"> <span className="size-60"><i className="icons10-window"></i></span> 
          <pre className="inline"><code>icons10-window</code></pre> 
        </div>
 
        <br/><br/><br/><br/>
          
      </div>
      
      </div>
  );
}

export default IconsView