import { Link } from "react-router-dom";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" 
    vertical className="masthead">
      <Container>
        <Header as='h1' inverted>
        <Icon />🥑
          SpartEvents
        </Header>
        <Button size='huge' 
        inverted as={Link}
        to='/events'>
          Get Stated
          <Icon name='caret right'/>:-) 
        </Button>
      </Container>
    </Segment>
  )
}