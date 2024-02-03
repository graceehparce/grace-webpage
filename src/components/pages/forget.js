import "./forget.css"
import { Text, Image, Group, Button } from "@mantine/core"
import aboutForgot from "../images/mac3.jpg"
import m1 from "../images/m1.jpeg"
import m2 from "../images/m2.jpeg"
import m4 from "../images/m4.jpeg"
import m5 from "../images/m5.jpeg"
import m6 from "../images/m6.jpeg"
import m7 from "../images/m7.jpeg"
import m8 from "../images/m8.jpeg"
import m9 from "../images/m9.jpeg"
import m10 from "../images/m10.jpeg"
import m11 from "../images/m11.jpeg"
import m12 from "../images/m12.jpeg"
import m13 from "../images/m13.jpeg"
import m14 from "../images/m14.jpeg"
import m15 from "../images/m15.jpeg"
import m16 from "../images/m16.jpeg"
import m17 from "../images/m17.jpeg"
import m18 from "../images/m18.jpeg"
import m19 from "../images/m19.jpeg"
import m20 from "../images/m20.jpeg"
import mac5 from "../images/mac5.jpeg"
import mac11 from "../images/mac11.jpeg"
import { useNavigate } from "react-router-dom"
import dog1 from "../images/dog1.jpeg"
import dog2 from "../images/dog2.jpeg"
import dog3 from "../images/dog3.jpeg"
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';
import ButtonMailto from "./Mailto"







export const ForgetPage = () => {
    const navigate = useNavigate()
    return (<div className="wholePage">
        <div className="macBanner"></div>
        <div className="titleBanner">FORGET ME KNOTS BY GRACIE</div>
        <div className="aboutBox">
            <Image src={aboutForgot} className="imageMac"></Image>
            <div className="macTextAbout">
                <Text className="aboutTitle">ABOUT THE ARTIST</Text>
                <Text className="textMac">

                    Gracie is a cellist and fiber artist based in Nashville, TN where she lives with her wonderful husband Tony and her hilarious pup and macrame model, Rupert.

                    Growing up with a wildly crafty mother, Gracie’s exposure to fiber arts began at birth. Commercially knitted sweaters were nonexistent in the Hartman home! Pamela, Gracie’s mother, even owns a yarn shop in Raleigh, NC.

                    Gracie didn't quite catch the craft bug until later in life. She was always dancing or playing the cello with not much time for yarn! Nowadays, Grace spends the majority of her time playing with professional orchestras around the country and frequents the recording studios here in Nashville. That is until 2020 when the macrame madness began!

                    Forget Me Knots has been such a breathe of fresh air, an outlet for creativity Gracie didn't know she needed. She plans to continue to grow her business and share her craft with others!


                </Text>
            </div>
        </div>
        <div className="inventory2">
            <Image src={dog1} className="dogPic"></Image>
            <Image src={dog2} className="dogPic"></Image>
            <Image src={dog3} className="dogPic"></Image>

        </div>
        <div className="directions">
            <Text className="largerDirections">Check out some of our past designs below!</Text>
            <Text className="smallerDirections">Every piece is custom. Designed and knotted by Gracie.</Text>
        </div>
        <Group className="invGroup" position="center">
            <Image className="inPic" src={m1} height={400} width={300}></Image>
            <Image className="inPic" src={m2} height={400} width={300}></Image>
            <Image className="inPic" src={m5} height={400} width={300}></Image>
            <Image className="inPic" src={m4} height={400} width={300}></Image>
            <Image className="inPic" src={m6} height={400} width={300}></Image>
            <Image className="inPic" src={m10} height={400} width={300}></Image>
            <Image className="inPic" src={m8} height={400} width={300}></Image>
            <Image className="inPic" src={m9} height={400} width={300}></Image>
            <Image className="inPic" src={m15} height={400} width={300}></Image>
            <Image className="inPic" src={m11} height={400} width={300}></Image>
            <Image className="inPic" src={m16} height={400} width={300}></Image>
            <Image className="inPic" src={m13} height={400} width={300}></Image>
            <Image className="inPic" src={m14} height={400} width={300}></Image>
            <Image className="inPic" src={m18} height={400} width={300}></Image>
            <Image className="inPic" src={m12} height={400} width={300}></Image>
            <Image className="inPic" src={m20} height={400} width={300}></Image>

            <Image className="inPic" src={m17} height={400} width={300}></Image>
            <Image className="inPic" src={m19} height={400} width={300}></Image>
        </Group>

        <div className="endSection">
            <div className="textAndButton">
                <div className="endText">
                    <Text className="endTextQ">Interested?</Text>
                    <Text className="endTextA">All pieces are made to order! If you'd like to make a purchase, please reach out and we can discuss a collaboration. Looking forward to knotting with you!</Text>
                </div>
                <Button
                    className="endButton"
                    variant="light"
                    color="dark"
                    radius={20}
                   >
                    <ButtonMailto class="emailButton" label="Contact" mailto="mailto:graceehparce@gmail.com" />
                </Button>
            </div>
            <Image className="endImage" src={mac5}></Image>
        </div>
        <div className="bottomSection">
        <div className="iconBox">   
        <a className="instaIcon" target="_blank" href="https://www.instagram.com/graceehparce/">
            <IconBrandInstagram />
        </a>
        <a className="instaIcon" target="_blank" href="https://www.youtube.com/@GracieParce">
            <IconBrandYoutube />
        </a>
        <a className="instaIcon" target="_blank" href="https://www.facebook.com/grace.hartman.54/">
            <IconBrandFacebook />
        </a>
        </div>
        <Text color="white">Created by Gracie Parce</Text>
    </div>
    </div >
    )
}