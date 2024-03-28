import { Tab, TabPane } from "semantic-ui-react";
import ProfileAbout from "./ProfileAbout";
import { Profile } from "../../app/model/profile";
type Props = {
    profile: Profile
}
export default function ProfileContent({profile}:Props) {
  const panes = [
    {menuItem: 'About', render: () => <ProfileAbout profile={profile}/> },
    {menuItem: 'Photos', render: () => <TabPane>Photos</TabPane> },
    {menuItem: 'Events', render: () => <TabPane>Events</TabPane> },
    {menuItem: 'Followers', render: () => <TabPane>Followers</TabPane> },
    {menuItem: 'Following', render: () => <TabPane>Following</TabPane> }
  ] 
    
  return (
    <Tab menu={{ fluid: true, vertical: true}} 
    menuPosition="right"
    panes={panes}
    />
  )
}