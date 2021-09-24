import React from "react";
import { AddChnannel } from "../assets";

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error: Please wait a moment and try again.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channels" : "Messages"} loading...
        </p>
      </div>
    ) : null;
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        {/* Build - add Channel*/}
        {children}
      </div>
    </div>
  );
};

export default TeamChannelList;
