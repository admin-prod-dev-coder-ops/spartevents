import { Link } from "react-router-dom";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";

export default function EventDetailedHeader() {
  const eventImagesStyle = {
    filter: 'brightness(30%)'
};
const eventImgTxtStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
}
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{padding:'0'}} >
        <Image src= '/orange-juice.jpeg'
        fluid style={eventImagesStyle} />

      <Segment basic style={eventImgTxtStyle}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header 
                size="huge"
                content='Event Title'
                style={{color:'white'}}
              />
              <p>Event Date</p>
              <p>
                Hosted by <strong>Bob</strong>
              </p>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      </Segment>

    <Segment>
    <Button>Cancel My Place</Button>
    <Button color="teal">JOIN THIS EVENT</Button>
    <Button as={Link} to={`/manage/abc`} color="orange" floated="right">
      Manage Event
    </Button>
    </Segment>
    </Segment.Group>
  )
}