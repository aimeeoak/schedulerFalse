import React from "react";
import ReactDOM from "react-dom";

import tweets from "./tweets.json";

// import "./styles.css";

const tweet = tweets[0];

function Tweet(props) {
  // Using the provided JSX return a tree of elements that represents a single tweet
}

ReactDOM.render(
  <Tweet
    name={tweet.name}
    avatar={tweet.avatar}
    content={tweet.content}
    date={tweet.date}
  />,
  document.getElementById("root")
);

function TweetList(props) {
    const tweets = props.tweets.map(tweet => {
      return (
        <Tweet
          name={tweet.name}
          avatar={tweet.avatar}
          content={tweet.content}
          date={tweet.date}
        />
      );
    });
  
    return tweets;
  }
  
  ReactDOM.render(
    <TweetList tweets={tweets} />,
    document.getElementById("root")
  );