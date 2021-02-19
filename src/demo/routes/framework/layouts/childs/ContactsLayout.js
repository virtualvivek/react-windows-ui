import React from 'react'
import { NavPageContainer,InputSearchBox,ListItem,HeaderFixedContainer,StickyHeader } from '../../../../../lib'
import Img1 from '../../../../img/default_avatar.png'
import Contacts from './data/contactsData.json'

class ContactsLayout extends React.Component {

    constructor() {
        super();
        this.state = {   
            data: Contacts,
            filteredData: Contacts
        }
      }

      handleInputChange = event => {
        const query = event.target.value
        this.setState(prevState => {
          const filteredData = prevState.data.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase())
          })
          return {
            query,
            filteredData
          }
        })
      }

  render() {
    return (
    <NavPageContainer hasPadding>

    <HeaderFixedContainer>
      <h1>Contacts</h1>

        <InputSearchBox
            placeholder="Search a contact"
            onChange={this.handleInputChange}/>

        <div className="app-hr"></div>
    </HeaderFixedContainer>

        
    <div style={{marginTop:140}}>

        {
        this.state.filteredData.map((item, key) => {
            switch(item.name) {
                case "header":
                    return <StickyHeader
                            key={key}
                            title={item.subtitle}
                            stickOffset={140}
                            //color="#16ab9c"
                            //fontSize={22}
                            />
                
                default:
                    return <ListItem
                            key={key}
                            img={Img1}
                            imgAlt="avatar1"
                            title={item.name}
                            subtitle={"@"+item.name}
                            />
            }
        })
        }

    </div>
    
    <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
  );
  }
}

export default ContactsLayout