import "./juniper.css"
import { Text, Image, Button } from "@mantine/core"
import juniper11 from "../images/juniper11.jpeg"
import juniper1 from "../images/juniper1.jpeg"
import { IconBrandInstagram } from '@tabler/icons-react'
import ButtonMailto from "./Mailto"



export const JuniperPage = () => {

    return (<div className="juniperWhole">
        <div className="juniperHome2">
            <Text className="juniperTitle2">The Juniper Duo</Text>
        </div >
        <div className="aboutJunBox">
            <Text className="aboutJun">
                Nashville's premier viola and cello duo, Grace Hartman Parce and Anthony Parce communicate their love for collaboration in every unique project they curate. Whether creating new transcriptions of classic favorites or highlighting emerging composers, the Juniper Duo brings life to a burgeoning genre of chamber music.
            </Text>
            <Image className="aboutJunPic" src={juniper11} />
        </div>
        <div className="videoBackground">  
            <iframe width="1000" height="450" src="https://www.youtube.com/embed/videoseries?si=rUuA1lranIXG4lLJ&amp;list=PLRH7TZXLLKdvgOqGOdcNdDlf3frxO21Od" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="lastJunBox">
        <div className="bottomJunBox">
            <Image className="aboutJunPic" src={juniper1} />
            <div className="bottomJunBox2">
                <Text className="textJunBox">
                    The Juniper Duo is available for recordings, live-performances, concerts, and collabs! Contact us for more information or if you'd like to book us for an event!
                
                </Text>
                <Button variant="dark"
                    color="dark"
                    radius={20}>
                    <ButtonMailto class="emailButton" label="Contact Us" mailto="mailto:graceehparce@gmail.com" />
                </Button>
            </div>
        </div>
       
        </div>
        <div className="bottomSection">
        <a className="instaIcon" target="_blank" href="https://www.instagram.com/graceehparce/">
            <IconBrandInstagram />
        </a>
        <Text color="white">Created by Gracie Parce</Text>
    </div>
    </div >
    )
}