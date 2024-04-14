import { Button, Divider, Grid, Header, Icon, Segment } from "semantic-ui-react";
import { useAppDispatch } from "../store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { openModal } from "../common/modals/modalSlice";

export default function UnathComponent() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/events'
  return (
    <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

        <Grid.Row verticalAlign="middle">
            <Grid.Column textAlign="center">
                <Header icon>
                    <Icon name='lock' />
                    You need to be signed in to do that
                </Header>
                <br />
                <Button.Group>
                    <Button 
                        color='teal'
                        content='Login'
                        onClick={()=>dispatch(openModal({type: 'LoginForm', data: {location}}))}
                        />
                </Button.Group>
                <Button.Or />
                <Button
                color="green"
                content='Register'
                onClick={()=>dispatch(openModal({type: 'RegisterForm', data: {from}}))}
                />
            </Grid.Column>
            <Grid.Column>
                <Header icon>
                    <Icon name='angle left' />
                    <Button
                    content='Cancel'
                    onClick={()=>navigate(-1)}/>
                </Header>
            </Grid.Column>
        </Grid.Row>
      </Grid>  
    </Segment>
  )
}