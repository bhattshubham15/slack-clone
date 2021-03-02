import { Divider, Icon } from '@material-ui/core'
import {
    Add,
    AppsOutlined,
    BookmarkBorder,
    CreateRounded,
    Drafts,
    ExpandLess,
    ExpandMore,
    FiberManualRecordRounded,
    FileCopy,
    Inbox,
    InsertComment,
    PeopleAlt
} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Sidebaroption from './Sidebaroption'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const Sidebar = () => {
    const [user, loading] = useAuthState(auth)
    const [channels] = useCollection(db.collection('rooms'))
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>{user.displayName}</h2>
                    <h3>
                        <FiberManualRecordRounded />
                        Some Info Here
                    </h3>
                </SidebarInfo>
                <CreateRounded />
            </SidebarHeader>
            <Sidebaroption Icon={InsertComment} title="Threads" />
            <Sidebaroption Icon={Inbox} title="Mentions & reactions" />
            <Sidebaroption Icon={Drafts} title="Saved items" />
            <Sidebaroption Icon={BookmarkBorder} title="Channel browser" />
            {/* <Sidebaroption Icon={PeopleAlt} title="People & user groups" />
            <Sidebaroption Icon={AppsOutlined} title="Apps" />
            <Sidebaroption Icon={FileCopy} title="File browser" />
            <Sidebaroption Icon={ExpandLess} title="Show less" /> */}
            <hr />
            <Sidebaroption Icon={ExpandMore} title="Channels" />
            <ExpandChannels>
                {channels?.docs.map((doc) => {
                    return (
                        <Sidebaroption key={doc.id} id={doc.id} title={doc.data().name} />
                    )
                })}
            </ExpandChannels>
            <hr />
            <Sidebaroption Icon={Add} addChannelOption title="Add channel" />
        </SidebarContainer>
    )
}

export default Sidebar

const ExpandChannels = styled.div`
    height: 100px;
    overflow-y: scroll;
`;
const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px
    }
`;
const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
