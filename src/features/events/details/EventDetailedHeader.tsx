import { Link } from "react-router-dom";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";
import { AppEvent } from "../../../app/model/Events";
import { useAppSelector } from "../../../app/store/store";
import { toast } from "react-toastify";
import { useState } from "react";
import { useFirestore } from "../../../app/hooks/firestore/useFirestore";
import { arrayRemove, arrayUnion } from "firebase/firestore";
type Props = {
  events: AppEvent
}
export default function EventDetailedHeader({ events }: Props) {
  const {currentUser} = useAppSelector(state=>state.auth);
  const [loading, setLoading] = useState(false);
  const {update} = useFirestore('events')
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

  async function toggleAttendance() {
    if(!currentUser){
      toast.error("Must be logged in to do this");
      return;
    }
    setLoading(true)
    if(events.isGoing){
      const attendee = events.attendees.find(x=>x.id === currentUser.uid)
      await update(events?.id,{
        attendees: arrayRemove(attendee),
        attendeeIds: arrayRemove(currentUser.uid)
      })
    }else{
      await update(events.id,{
        attendees: arrayUnion({
          id: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURl
        }),
        attendeeIds: arrayUnion(currentUser.uid)
      })
    }
  }
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }} >
        <Image src='/${events.category}.jpeg'
          fluid style={eventImagesStyle} />

        <Segment basic style={eventImgTxtStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={events.title}
                  style={{ color: 'white' }}
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

      <Segment attached="bottom" clearing>
        {events.isHost ? (
          <Button as={Link} to={`/manage/${events.id}`} color="orange" floated="right">
            Manage Event
          </Button>
        ) : (
          <Button 
          content={events.isGoing ? 'Cancel my place' : 'Join this Event'}
          color={events.isGoing ? 'grey' : 'teal'}
          onClick={toggleAttendance}
          loading={loading}
          />
        )
      }

      </Segment>
    </Segment.Group>
  )
}