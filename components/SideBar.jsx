import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import * as EmailValidator from 'email-validator';

function SideBar() {

    const createChat = () => {
        const input = prompt('Please enter an email address');

        if (!input) return null;
    }

    return (
        <Container>
            <Header>
                <UserAvatar/>

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

                <SearchInput placeholder='Search Chats'/>
            </Search>

            <SideBarButton onClick={createChat}>
                Start a New Chat
            </SideBarButton>

        {/*LIST OF CHATS*/}
        </Container>
    );
}

export default SideBar;

const Container = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

const Header = styled.div`
  display: flex;
  poition: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`

const UserAvatar = styled(Avatar)`

`

const IconsContainer = styled.div`

`

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
`

const SideBarButton = styled(Button) `
  width: 100%;
  
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`
