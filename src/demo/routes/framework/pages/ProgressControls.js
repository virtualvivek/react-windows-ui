import React from 'react'
import { ProgressBarIndeterminate,ProgressBar,
  LoaderBar,LoaderBusy, NavPageContainer,Button } from '../../../../lib'

  class ProgressControls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoaderBusyFull :false
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

  render() {
    return (
    <NavPageContainer hasPadding>
      <h1>ProgressControls</h1>

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
