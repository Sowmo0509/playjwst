import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../helpers/UserContext";
import constData from "../../data/const";
import axios from "axios";
import { EmailShareButton, FacebookShareButton, HatenaShareButton, InstapaperShareButton, LineShareButton, LinkedinShareButton, LivejournalShareButton, MailruShareButton, OKShareButton, PinterestShareButton, PocketShareButton, RedditShareButton, TelegramShareButton, TumblrShareButton, TwitterShareButton, ViberShareButton, VKShareButton, WhatsappShareButton, WorkplaceShareButton } from "react-share";
import { EmailIcon, FacebookIcon, FacebookMessengerIcon, HatenaIcon, InstapaperIcon, LineIcon, LinkedinIcon, LivejournalIcon, MailruIcon, OKIcon, PinterestIcon, PocketIcon, RedditIcon, TelegramIcon, TumblrIcon, TwitterIcon, ViberIcon, VKIcon, WeiboIcon, WhatsappIcon, WorkplaceIcon } from "react-share";

const Result = () => {
  const { userState, setUserState } = useContext(UserContext);
  const data = { username: userState.username, point: userState.point };

  useEffect(() => {
    axios
      .post(`api/test/add`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      });
  }, [data]);

  return (
    <section className="bgimg min-h-screen w-full">
      <div className="main container mx-auto md:flex md:justify-center md:items-center py-8 px-8 min-h-screen text-white relative overflow-hidden">
        {/* MAIN STUFFS */}
        <div className="quiz md:w-1/2 mx-auto text-white bg-gray-900 p-4 md:p-12 rounded-lg">
          <div className="scoreDiv flex gap-x-4 items-center">
            <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
              <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h1 class="flex items-center text-4xl font-extrabold dark:text-white">
              {userState.username}
              <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">{userState.point}</span>
            </h1>
          </div>
          <div className="headlineDiv pt-8">
            <h2 class="text-3xl font-extrabold text-gray-300">Congratulations!</h2>
            <p class="my-4 text-lg text-gray-500">Post this or share the result on your social media to impress your friends!</p>
          </div>
          <div className="socialShare flex gap-x-4">
            <FacebookShareButton url={constData.webUrl} quote={`Check this out! I just got ${userState.point} playing PlayJWST! Try it now!`} hashtag={"#playjwst"}>
              <FacebookIcon size={"3vw"} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url={constData.webUrl} quote={`Check this out! I just got ${userState.point} playing PlayJWST! Try it now!`} hashtag={"#playjwst"}>
              <WhatsappIcon size={"3vw"} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton url={constData.webUrl} quote={`Check this out! I just got ${userState.point} playing PlayJWST! Try it now!`} hashtag={"#playjwst"}>
              <TwitterIcon size={"3vw"} round={true} />
            </TwitterShareButton>
            <EmailShareButton url={constData.webUrl} quote={`Check this out! I just got ${userState.point} playing PlayJWST! Try it now!`} hashtag={"#playjwst"}>
              <EmailIcon size={"3vw"} round={true} />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
