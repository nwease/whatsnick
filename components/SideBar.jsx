import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import * as EmailValidator from 'email-validator';
import {auth, db} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';
import Chat from './Chat';

function SideBar() {

    const [user] = useAuthState(auth);

    const userChatsRef = db
        .collection('chats')
        .where('users', 'array-contains', user.email);

    const [chatsSnapshot, loading] = useCollection(userChatsRef);

    const createChat = () => {
        const input = prompt('Please enter an email address');

        if (!input) return null;

        if (EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email) {
            // ADD CHAT TO DB HERE
            db.collection('chats')
                .add({
                    users: [user.email, input],
                })
        }
    }

    const chatAlreadyExists = (recipientEmail) =>
        !!chatsSnapshot?.docs
            .find(chat => chat.data().users
                .find(user => user === recipientEmail)?.length > 0
            );

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

            {
                chatsSnapshot?.docs.map((chat) => (
                    <Chat
                        key={chat.id}
                        id={chat.id}
                        users={chat.data().users}
                    />
                ))
            }
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
