import React from "react";
import { TopBlogs, TopCinemaLists, TopBooks, SignInLand } from "./components";
import Translate from "react-translate-component";

const LandingPage = () => {
  return (
    <div className="bg-background">
      {/* <Divider title="የሲኒማ ጊዜ ሰሌዳ" /> */}
      <Translate
        content="CinemaS"
        component="h3"
        className="divider bg-background mt-3 mb-3  text-primary text-uppercase"
      />
      <TopCinemaLists />

      <Translate
        content="books"
        component="h3"
        className="divider bg-background mt-3 mb-3  text-primary text-uppercase"
      />
      <TopBooks />
      <SignInLand />
      {/* <Divider title="ዜናዎች" /> */}
      <Translate
        content="news"
        component="h3"
        className="divider bg-background mt-3 mb-3  text-primary text-uppercase"
      />
      <TopBlogs />
    </div>
  );
};

export default LandingPage;
