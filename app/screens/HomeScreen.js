import React from "react";
import BackgroundBlurred from "../components/backgrounds/BackgroundBlurred";
import Background from "../components/backgrounds/Background";
import AppBarFeed from "../components/appBars/AppBarFeed";
import TabBar from "../components/tabBar/TabBar";
import FeedList from "../components/feed/FeedList";
import Home from "../components/home/Home";


export default function HomeScreen () {

    return (
        <Background page={'home'}>

            <AppBarFeed />

            <Home />

            <TabBar page={'home'} />

        </Background>
    );

};

