import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  // 2:43
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="//yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here."
      />
      <hr />

      <VideoRow
        views="1.8M"
        subs="656K"
        description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to enroll in an EPIC Python course where you can have exercises and projects all under one account & for FREE... Click this link: ..."
        timestamp="11 months ago"
        channel="Clever Programmer"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAOprceqhi3cByjE5HeG6E8klPGZA"
      />

      <VideoRow
        views="1.8M"
        subs="656K"
        description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to enroll in an EPIC Python course where you can have exercises and projects all under one account & for FREE... Click this link: ..."
        timestamp="11 months ago"
        channel="Clever Programmer"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAOprceqhi3cByjE5HeG6E8klPGZA"
      />

      <VideoRow
        views="1.8M"
        subs="656K"
        description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to enroll in an EPIC Python course where you can have exercises and projects all under one account & for FREE... Click this link: ..."
        timestamp="11 months ago"
        channel="Clever Programmer"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAOprceqhi3cByjE5HeG6E8klPGZA"
      />

      <VideoRow
        views="1.8M"
        subs="656K"
        description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to enroll in an EPIC Python course where you can have exercises and projects all under one account & for FREE... Click this link: ..."
        timestamp="11 months ago"
        channel="Clever Programmer"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAOprceqhi3cByjE5HeG6E8klPGZA"
      />
    </div>
  );
}

export default SearchPage;
