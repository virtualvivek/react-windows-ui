import React from 'react'
import { ProgressBarIndeterminate,ProgressBar,
  LoaderBar,LoaderBusy, NavPageContainer,Button } from '../../../../lib'

  class ProgressControls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoaderBusyFull :false,
            ProgressBar1:46,
        }
      }

    toggleLoaderBusyFull = () => {
        if(this.state.showLoaderBusyFull){
            this.setState({showLoaderBusyFull: false});
        }
        else {
            this.setState({showLoaderBusyFull: true}); 
        } 
    }
    setProgress2 = () => { this.setState({ProgressBar1:2}) }
    setProgress50 = () => { this.setState({ProgressBar1:50}) }
    setProgress99 = () => { this.setState({ProgressBar1:99}) }

  render() {
    return (
    <NavPageContainer hasPadding>
      <h1>ProgressControls</h1>

      <h1 className="m-0 color-accent"
          style={{fontSize:56}}>
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
              icon={<i className="icons10-hdd" ></i>}
            />
           
        <h3 className="m-b-15">Progress Indeterminate</h3>
            <ProgressBarIndeterminate
              isLoading={true}
            />

        <h3 className="m-b-15">LoaderBar</h3>
            <LoaderBar/>

        <h3 className="m-b-15">LoadeBusy</h3>

          <br/>

            <LoaderBusy/>

          <br/>

        <h3 className="m-b-15">LoadeBusy Fullscreen</h3>

            <LoaderBusy
              isVisible={this.state.showLoaderBusyFull}
              onBackdropPress={this.toggleLoaderBusyFull}
              display="fullscreen"
            />

            <Button
              value="Open Loader fullscreen" 
              onClick={this.toggleLoaderBusyFull}
            />



            <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
  );
  }
}

export default ProgressControls