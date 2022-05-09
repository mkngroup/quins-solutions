import React from "react";
import KesfetBtn from "./KesfetBtn";

function FeedCard(props) {
  return (
    <div className="p-10 relative ">
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/gorgeous-girl-with-beautiful-face_144627-11897.jpg?t=st=1650625419~exp=1650626019~hmac=8a34c01c3954a2c58091db4749827b3b18ed4457543f7766ec2f5a86bc91a58f&w=740"
            alt=""
            className="object-cover max-w-lg"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            consectetur vel, rem labore, nemo corrupti nam fuga mollitia
            voluptate, odio accusamus! Mollitia, nihil adipisci dolor, amet
            repellat cupiditate provident eligendi, ducimus exercitationem
            tempora a maiores sunt sequi voluptatibus similique nam tempore
            officiis id ut omnis repudiandae. Earum quos consequuntur
            consectetur?
          </p>
        </div>
        <div className="absolute bottom-0">
          <KesfetBtn/>
        </div>
      </div>
  );
}

export default FeedCard;
