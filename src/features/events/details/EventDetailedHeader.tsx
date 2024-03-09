import { Link } from "react-router-dom";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";
import { Events } from "../../../app/model/Events";
type Props = {
  events: Events
}
export default function EventDetailedHeader({events} :Props) {
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
};
return (
    <Segment.Group>
      <Segment basic attached="top" style={{padding:'0'}} >
        <Image src= '/${events.category}.jpeg'
        fluid style={eventImagesStyle} />

      <Segment basic style={eventImgTxtStyle}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header 
                size="huge"
                content={events.title}
                style={{color:'white'}}
              />
              <p>{events.date}</p>
              <p>
                Hosted by <strong>{events.hostedBy}</strong>
              </p>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      </Segment>

    <Segment>
    <Button>Cancel My Place</Button>
    <Button color="teal">JOIN THIS EVENT</Button>
    <Button as={Link} to={`/manage/${events.id}`} color="orange" floated="right">
      Manage Event
    </Button>
    </Segment>
    </Segment.Group>
  )
}