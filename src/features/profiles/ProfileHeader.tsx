import { Button, Divider, Grid, Header, Item, Segment, Statistic } from "semantic-ui-react";
import { Profile } from "../../app/model/profile";
import { useFirestore } from "../../app/hooks/firestore/useFirestore";
import { auth } from "../../app/config/firebase";
import { increment } from "firebase/firestore";
type Props = {
    profile: Profile
}
export default function ProfileHeader({profile}: Props) {
    const {update} = useFirestore('profiles');
    const {set: setFollower, remove: removeFollower} = useFirestore(`profiles/${profile.id}/followers`);
    const {set: setFollowing, remove: removeFollowing} = useFirestore(`profiles/${profile.id}/following`);

    async function handleFollowToggle(follow:boolean) {
        if(!profile.id || !auth.currentUser?.uid) return;
        if(follow){
            await update(auth.currentUser.uid,{
                followingCount: increment(1)
            });
            await update(profile.id,{
                follower: increment(1)
            });
            await setFollowing(profile.id,{
                displayName: profile.displayName,
                photoURL: profile.photoURL
            });
            await setFollower(auth.currentUser.uid,{
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL
            })
        }else{
            await update(auth.currentUser.uid,{
                followingCount: increment(-1)
            });
            await update(profile.id,{
                follower: increment(-1)
            });
            await removeFollowing(profile.id);
            await removeFollower(auth.currentUser.uid);

        }
    }
  return (
    <Segment>
        <Grid>
            <Grid.Column width={12}>
                <Item.Group>
                    <Item>
                        <Item.Image avatar size="small" src={profile.photoURL || '/user.png'} />
                        <Item.Content verticalAlign="middle">
                            <Header as='h1' 
                            style={{display:'block', marginBottom:10}}
                            content={profile.displayName} 
                            />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Grid.Column>
            <Grid.Column width={4}>
                <Statistic.Group>
                    <Statistic label='Followers' value={profile.followerCount || 0}/>
                    <Statistic label='Following' value={profile.followingCount || 0}/>
                </Statistic.Group>
                <Divider />
                <Button color='teal' content='Follow' onClick={()=>handleFollowToggle(true)} />
                <Button color='teal' content='UnFollow' onClick={()=>handleFollowToggle(false)} />
                {/* <Reveal animated="move">
                    <Reveal.Content visible style={{width: '100%'}}>
                    <Button fluid color='teal' content='Following' />
                    </Reveal.Content>
                    <Reveal.Content visible style={{width: '100%'}}>
                    <Button fluid color='red' content='Unfollow' />
                    </Reveal.Content>             
                </Reveal> */}
            </Grid.Column>
        </Grid>
    </Segment>
  )
}