import React from 'react'
import { NavPageContainer,Card,ListItem,Button,LinkCoumpound } from '../../../../lib'

class CardLayout extends React.Component {

  render() {
    return (
    <NavPageContainer hasPadding>
      <h1>Cards</h1>

        <h3 className="m-b-15">Default</h3>

        <Card
            display="flow-root"
            maxWidth={400}
            padding={10}>
            <ListItem 
                icon={<i className="icons10-headphone bg-grey"></i>}
                title="Realtek audio settings"
                subtitle="Manage devices audio preferences"
                borderBottom={true}
            />
            <div style={{float:'right'}}>
                <Button value="Manage"/>
                &nbsp;   
            </div>
        </Card>

        <h3 className="m-b-15">Hoverable</h3>
          
        <Card
            display="flow-root"
            hoverable
            maxWidth={400}
            padding={10}>
            <ListItem 
                icon={<i className="icons10-news bg-accent"></i>}
                title="News"
                subtitle="12.4 MB"
                info="installed"
                borderBottom={false}
            />
            <div style={{float:'right'}}>
                <Button value="Options"/>
                &nbsp;&nbsp;
                <Button value="Remove"/>    
            </div>
        </Card>

        <h3 className="m-b-15">Focused</h3>

        <Card
            display="flow-root"
            focused
            maxWidth={400}
            padding={10}>
            <LinkCoumpound  
                to="#"
                title="Notification settings and DND"
                subtitle="Control which app sends you push notification, adjusts timing according to clock"
                icon={<i className="icons10-notification accent"></i>} 
            />
            <div style={{float:'right'}}>
                <Button value="Edit"/>
                &nbsp;   
            </div>
        </Card>


        <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
  );
  }
}

export default CardLayout