import React from 'react';

interface ChannelPageProps{
    title:string;
}

export const ChannelPage : React.FC<ChannelPageProps> = (props) => {
    return (
        <div>
            Channel Page 제목 : {props.title}
        </div>
    )
};