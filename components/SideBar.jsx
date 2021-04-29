import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import * as EmailValidator from 'email-validator';
import {auth} from '../firebase';

function SideBar() {

    const createChat = () => {
        const input = prompt('Please enter an email address');

        if (!input) return null;

        if (EmailValidator.validate(input)) {
            // ADD CHAT TO DB HERE
        }
    }

    return (
        <Container>
            <Header>
                <UserAvatar onClick={() => auth.signOut()} />

                <IconsContainer>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon/>

                <SearchInput placeholder='SEARCH'/>
            </Search>

            <SideBarButton color='primary' onClick={createChat}>
                Start a New Chat
            </SideBarButton>

            {/*LIST OF CHATS*/}
        </Container>
    );
}

export default SideBar;

const Container = styled.div``

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid lightgray;
`

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const IconsContainer = styled.div``

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background: whitesmoke;
`

const SideBarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
`
