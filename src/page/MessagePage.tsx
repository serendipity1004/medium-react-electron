import React from 'react';

interface MessagePageProps {
    title:string;
}

export const MessagePage : React.FC<MessagePageProps> = (props)=>{
    return (
        <div>
            Message Page 제목 : {props.title}
        </div>
    )
};