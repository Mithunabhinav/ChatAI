import React from "react";
import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';
import Header from "@/components/customHeader";

const Chat = () => {
    console.log(import.meta.env[1]);
    const chatProps = useMultiChatLogic(import.meta.env, "user1", "123");

    return <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}
            style={{ height: "100vh" }}
            renderChatHeader={(chat) => <Header chat={chat} />}
        />
    </div>;
};

export default Chat;