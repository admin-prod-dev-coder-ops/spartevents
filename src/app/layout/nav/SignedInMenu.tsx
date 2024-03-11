import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
import { useAppSelector } from "../../store/store";
import { useDispatch } from "react-redux";
import { signOut } from "../../../features/auth/authSlice";

export default function SignedInMenu() {

    const {currentUser} = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSignOut(){
        dispatch(signOut());
        navigate('/');
    }

  return (
    <Menu.Item position="right">
        {/* <Icon /> */}
        <Dropdown pointing='top left' text={currentUser?.email}>
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