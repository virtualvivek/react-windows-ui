import React from 'react'
import { ProgressBarIndeterminate, ProgressBar,
         LoaderBar, LoaderBusy, NavPageContainer,NavPageContainerInner, Button } from '../../../lib'

  class ProgressControls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoaderBusyFull: false,
            showLoaderBusyFullCustom: false,
            showProgressIndeterminate: true,
            showLoaderBar: true,
            showLoaderBusy: true,
            ProgressBar1: 46,
        }
      }

    toggleLoaderBusyFull = () => {
        if(this.state.showLoaderBusyFull)
              this.setState({showLoaderBusyFull: false});
        else  this.setState({showLoaderBusyFull: true}); 
    }

    toggleLoaderBusyFullCustom = () => {
      if(this.state.showLoaderBusyFullCustom)
            this.setState({showLoaderBusyFullCustom: false});
      else  this.setState({showLoaderBusyFullCustom: true});
    }

    toggleProgressIndeterminate = () => {
      if(this.state.showProgressIndeterminate)
            this.setState({showProgressIndeterminate: false});
      else  this.setState({showProgressIndeterminate: true});
    }

    toggleLoaderBar = () => {
      if(this.state.showLoaderBar)
            this.setState({showLoaderBar: false});
      else  this.setState({showLoaderBar: true});
    }
    
    toggleLoaderBusy = () => {
      if(this.state.showLoaderBusy)
            this.setState({showLoaderBusy: false});
      else  this.setState({showLoaderBusy: true});
    }

    setProgress2 = () => { this.setState({ProgressBar1:2}) }
    setProgress50 = () => { this.setState({ProgressBar1:50}) }
    setProgress99 = () => { this.setState({ProgressBar1:99}) }

  render() {
    return (
    <NavPageContainer>

    <NavPageContainerInner>

      <h1>ProgressControls</h1>

      <h1 className="m-0 color-primary" style={{fontSize:56}}>
        {this.state.ProgressBar1}%
      </h1>

      <ProgressBar
        setProgress={this.state.ProgressBar1}
      />

      <br/>
      <Button
        value="set 2%"
        onClick={this.setProgress2}/>
        &nbsp;
      <Button
        value="set 50%"
        onClick={this.setProgress50}/>
        &nbsp;
      <Button
        value="set 99%"
        onClick={this.setProgress99}/>

      <h3 className="m-b-15">Progress Default</h3>

        <ProgressBar
          title="Title"
          subtitle="subtitle"
          setProgress={90}
        />

      <h3 className="m-b-15">Progress with Icon</h3>

        <ProgressBar
          title="Drive C:"
          subtitle="primary storage"
          setProgress={50}
          showIcon={true}
          icon={<i className="icons10-hdd"></i>}
        />

      <h3 className="m-b-15">Progress Custom Height</h3>

        <ProgressBar
          title="Storage D:/"
          setProgress={50}
          height={15}
        />
           
        <h3 className="m-b-15">Progress Indeterminate</h3>

          <ProgressBarIndeterminate
            isLoading={this.state.showProgressIndeterminate}
          />
           <br/>
        <Button
          value="Toggle Progress Loading"
          icon={<i className="icons10-resize-horizontal"></i>}
          onClick={this.toggleProgressIndeterminate}/>

        <h2 className="m-b-15">LoaderBars</h2>

            <LoaderBar
              isLoading={this.state.showLoaderBar}
            />
            <Button
              value="Toggle LoaderBar"
              icon={<i className="icons10-resize-horizontal" ></i>}
              onClick={this.toggleLoaderBar}/>

        <h3 className="m-b-15">LoadeBusy</h3>

          <br/>

          <div className="app-flex">
            
            <LoaderBusy
              isLoading={this.state.showLoaderBusy}/>

            <div className="app-space-45"></div>

            <LoaderBusy
              isLoading={this.state.showLoaderBusy}
              size="medium"/>

            <div className="app-space-35"></div>

            <LoaderBusy
              isLoading={this.state.showLoaderBusy}
              size="small"/>
          </div>
          

          <br/><br/>
          <Button
            value="Toggle LoaderBusy"
            icon={<i className="icons10-resize-horizontal"></i>}
            onClick={this.toggleLoaderBusy}
          />


        <h3 className="m-b-15">LoadeBusy Fullscreen</h3>

          <LoaderBusy
            isVisible={this.state.showLoaderBusyFull}
            onBackdropPress={this.toggleLoaderBusyFull}
            display="fullscreen"
          />

          <Button
            value="Open fullscreen Loader" 
            onClick={this.toggleLoaderBusyFull}
          />

        <h3 className="m-b-15">Custom Background</h3>

            <LoaderBusy
              isVisible={this.state.showLoaderBusyFullCustom}
              onBackdropPress={this.toggleLoaderBusyFullCustom}
              display="fullscreen"
              backgroundColor="var(--PrimaryColor)"
              setTheme="light"
              title="Tap anywhere to dismiss"
            />

            <Button
              value="Open Custom fullscreen Loader" 
              onClick={this.toggleLoaderBusyFullCustom}
            />

        <h2 className="m-b-15">Progress Status</h2>

          <h2 className="m-b-15">Danger</h2>
            <ProgressBar
              title="Copying files.."
              setProgress={40}
              setStatus="danger"
            />

          <h2 className="m-b-15">Success</h2>

            <ProgressBar
              title="Downloaded imageres.dll ✅"
              setProgress={99}
              setStatus="success"
            />

          <br/><br/>

    </NavPageContainerInner>

      <div className="app-align-center background-color-primary">
      
        <br/><br/>
        
        <div className="app-flex">
        <div className="app-space-45"></div>

          <LoaderBusy
            setTheme="light"
            isLoading={true}/>

          <div className="app-space-45"></div>

          <LoaderBusy
            setTheme="light"
            isLoading={true}
            size="medium"/>

          <div className="app-space-35"></div>

          <LoaderBusy
            setTheme="light"
            isLoading={true}
            size="small"/>
        </div>
        <br/><br/>

        <LoaderBar
        setTheme="light"
          isLoading={true}
        />

        <br/><br/>
      </div>

    </NavPageContainer>
  );
  }
}

export default ProgressControls