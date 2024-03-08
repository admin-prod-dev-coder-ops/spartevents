import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedOutBtn from "./SignedOutBtn";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";


export default function NavBar() {
    const [auth, setAuth] = useState(true)
    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header as={NavLink} to="/">
                    <img src="/icon.png" alt="logo" />
                    SpartEvents
                </MenuItem>
                <MenuItem name='Events' as={NavLink} to="/events" />
                <MenuItem>
                    <Button 
                    as={NavLink}
                    to='/createEvent'
                    floated='right' 
                    positive={true} 
                    inverted={true} 
                    content='Create Event'>
                    </Button>
                </MenuItem>
                <MenuItem position="right">
                    <SignedOutBtn setAuth={()=>false}/>
                </MenuItem>
                {auth ? <SignedInMenu setAuth={setAuth} /> : 
                <SignedOutBtn setAuth={setAuth} />}
                
            </Container>
        </Menu>
    )
}