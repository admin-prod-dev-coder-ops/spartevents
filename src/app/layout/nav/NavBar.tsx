import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedOutBtn from "./SignedOutBtn";
import SignedInMenu from "./SignedInMenu";
import { useAppSelector } from "../../store/store";

export default function NavBar() {
    const {authenticated} = useAppSelector(state => state.auth)

    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header as={NavLink} to="/">
                    <img src="/icon.png" alt="logo" />
                    SpartEvents
                </MenuItem>
                <MenuItem name='Events' as={NavLink} to="/events" />
                <MenuItem name='Scratch' as={NavLink} to="/scratch" />
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

                {authenticated ? <SignedInMenu /> : 
                <SignedOutBtn />}
                
            </Container>
        </Menu>
    )
}