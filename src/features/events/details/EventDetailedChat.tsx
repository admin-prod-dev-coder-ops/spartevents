import { Button, Comment, Form, Header, Segment } from "semantic-ui-react";

export default function EventDetailedChat() {
  return (
    <>
    <Segment 
    textAlign="center"
    attached="top"
    inverted
    color="teal"
    style={{border:'none'}}>
      <Header>Chat about this event</Header>
    </Segment>

    <Segment attached>
      <Comment.Group>
        <Comment>
        <Comment.Avatar src="/icon.png"></Comment.Avatar>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42 PM</div>
        </Comment.Metadata>
        <Comment.Text>Wow, Fantastic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
        </Comment>

        <Comment>
        <Comment.Avatar src="/icon.png"></Comment.Avatar>
        <Comment.Author as="a">Raphael</Comment.Author>
        <Comment.Metadata>
          <div>Today at 6:33 PM</div>
        </Comment.Metadata>
        <Comment.Text>It's really cool!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
        </Comment>

        <Form reply>
          <Form.TextArea />
            <Button 
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary />
        </Form>

      </Comment.Group>
    </Segment>
    </>
  )
}