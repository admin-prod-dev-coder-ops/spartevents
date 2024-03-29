import { Button, Grid, Header, Tab } from "semantic-ui-react";
import { Profile } from "../../app/model/profile";
import { useState } from "react";
import ProfileForm from "./ProfileForm";
type Props = {
    profile: Profile
}
export default function ProfileAbout({ profile }: Props) {
    const [editMode, setEditMode] = useState(false);
    return (
        <Tab>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated="left" icon='user'
                        content={`About ${profile.displayName}`} />
                        <Button floated="right" basic content={editMode ? 'Cancel' : 'Edit Profiles'}
                        onClick={() => setEditMode(!editMode)}/>
                </Grid.Column>
                <Grid.Column>
                    {editMode ? <ProfileForm profile={profile} setEditMode={setEditMode}></ProfileForm> :(
                        <>
                        <div style={{marginBottom: 10}}></div>
                        <strong>Member since: {profile.createdAt}</strong>
                        <div style={{marginTop: 10}}>{profile.description}</div>
                        </>
                    )}
                </Grid.Column>
            </Grid>
        </Tab>
    )
}