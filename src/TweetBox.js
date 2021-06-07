import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Akash Chopra",
            username: "akashchopra",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "data:image/png;base64,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"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1385269922553470976/D4ZnmXjy_400x400.jpg" />
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}    
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>
                <input 
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__inputImage"
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />
                <Button type="submit" className="tweetBox__tweetButton" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
