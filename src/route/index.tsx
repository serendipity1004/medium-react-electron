import React from 'react';
import {
    IndexPage,
    ChannelPage,
    MessagePage,
} from 'page';

const channels = [
    {
        title:'FMD 임원',
        route: '/chiefs',
    },
    {
        title:'FMD 일반',
        route:'/general'
    },
    {
        title:'FMD 브레인스토밍',
        route:'/brainstorming',
    },
    {
        title:'FMD 오퍼레이션',
        route:'/operation',
    },
    {
        title:'FMD 마케팅',
        route: '/marketing',
    },
    {
        title:'FMD 개발',
        route:'/devs',
    },
    {
        title:'FMD QA',
        route:'/qa',
    },
    {
        title:'FMD 클라이언트',
        route:'/client'
    },
    {
        title:'FMD 전체',
        route:'/all'
    }
];

const messages = [
    {
        title:'아이린',
        route:'/irene',
    },
    {
        title:'슬기',
        route:'/seulgi',
    },
    {
        title:'조이',
        route:'/joy',
    },
    {
        title:'예리',
        route:'/yeri'
    },
    {
        title:'웬디',
        route:'/wendy',
    }
];

export const indexRoutes = [
    ...channels.map(
        item => ({
            route:item.route,
            title:item.title,
            exact:true,
            type:'channel',
            component:<ChannelPage title={item.title}/>
        })
    ),
    ...messages.map(
        item => ({
            route:item.route,
            title:item.title,
            exact:true,
            type:'message',
            component:<MessagePage title={item.title}/>
        })
    ),
    {
        route:'/',
        title:'메인',
        exact:true,
        type:'root',
        component:<IndexPage/>
    }
];