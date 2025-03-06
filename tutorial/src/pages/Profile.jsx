import { useEffect, useState } from "react";
import Hero from "@/stories/Hero/Hero";
import Avatar from "@/stories/Avatar/Avatar";
import girl from "@/stories/assets/girl.png";
import Button from "@/stories/Button/Button";
import Card from "@/stories/Card/Card";

//images
import nycImage from "@/stories/assets/nycSky.png";
import imgOne from "@/stories/assets/imgOne.png";
import imgTwo from "@/stories/assets/imgTwo.png";
import imgThree from "@/stories/assets/imgThree.png";
import imgFour from "@/stories/assets/imgFour.png";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const allTreeImages = [imgOne, imgTwo, imgThree, imgFour];
  useEffect(() => {
    getUserData();
    async function getUserData() {
      //grab the data from json bin
      /**
       *  fetch makes the rest of its options
       * in an object
       */
      const response = await fetch(
        "https://api.npoint.io/b7869167c6757876a385",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setUserData(data);
    }
  }, []);

  return (
    <div className="mb-4">
      <Hero imgSrc={nycImage} />
      {userData && (
        <div className="flex flex-row gap-8">
          <div className="flex flex-col ml-4 gap-4 -mt-10">
            <Avatar imgSrc={girl} />
            <div className="flex flex-col gap-8  w-max ">
              <div className="flex flex-col gap-1">
                <p className=" text-4xl font-bold">{userData.name}</p>
                <p className="text-2xl">{userData.job}</p>
                <p className="text-xl">New York, NY</p>
              </div>
              <div className="flex flex-col gap-2">
                <Button type={"primary"} label={"Follow"} />
                <Button type={"secondary"} label={"Message"} />
              </div>
            </div>
          </div>
          <div className="border-gray-200 border-solid border-r-4 mt-5"></div>
          <div className="flex flex-col gap-4">
            <p className=" text-4xl font-bold mt-2 text-center">Photos Taken</p>
            <div className="flex flex-wrap  gap-2 mt-auto">
              {userData?.cards.map((card, idx) => (
                <Card
                  imgSrc={allTreeImages[idx]}
                  title={card.imageTitle}
                  description={card.Location}
                  likes={card.likes}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
