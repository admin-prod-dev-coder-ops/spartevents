import { Button, Card, Grid, Header, Image, Tab } from "semantic-ui-react";
import { Profile } from "../../app/model/profile";
import { useState } from "react";
import { auth } from "../../app/config/firebase";

type Props = {
    profile: Profile
}
export default function ProfilePhotos({ profile }: Props) {
    const [editMode, setEditMode] = useState(false);
    const isCurrentUser = auth.currentUser?.uid === profile.id
    return (
        <Tab>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated="left" icon='photo'
                        content='Photos' />
                        {isCurrentUser && 
                        <Button floated="right" basic content={editMode ? 'Cancel' : 'Add Photos'}
                        onClick={() => setEditMode(!editMode)}/>}
                </Grid.Column>
                <Grid.Column>
                    {editMode ? <p>Photo upload goes here</p> :(
                        <>
                       
                            <Card.Group>
                            <Card>
                                <Image src='/usr.png' />
                                {isCurrentUser && 
                                <Button.Group>
                                    <Button basic color='green'>Main</Button>
                                    <Button basic color='red' icon='Trash'></Button>
                                </Button.Group>
                                }
                            </Card>
                            </Card.Group>
                        
                        </>
                    )}
                </Grid.Column>
            </Grid>
        </Tab>
    )
}