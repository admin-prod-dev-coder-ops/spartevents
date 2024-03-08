import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

type Props = {
    setAuth: (value: boolean) => void;
}

export default function SignedInMenu({setAuth}: Props) {
    const navigate = useNavigate();

    function handleSignOut(){
        setAuth(false);
        navigate('/');
    }

  return (
    <Menu.Item position="right">
        {/* <Icon /> */}
        <Dropdown pointing='top left' text='Bob'>
            <Dropdown.Menu>
            <Dropdown.Item as={Link} 
            to='/createEvent'
            text='Create Event'
            icon='plus' />
            <Dropdown.Item text="My profile" icon='user' />
            <Dropdown.Item onClick={handleSignOut} 
            text="Sign out" icon='power' />
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
  )
}