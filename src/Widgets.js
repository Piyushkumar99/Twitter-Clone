import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>

                <TwitterTweetEmbed tweetId={""} />

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="PrinceP71556820"
                    options={{ height: 400 }}
                />

                <TwitterShareButton 
                    url={"https://www.facebook.com/princepiyush.kumar.1"}
                    options={{ text: "#reactjs is DOPE", via: "PrinceP71556820"}}
                />
            </div>
        </div>
    )
}

export default Widgets;
