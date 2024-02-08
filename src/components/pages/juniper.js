import "./juniper.css"
import { Text, Image, Button, ScrollArea } from "@mantine/core"
import juniper11 from "../images/juniper11.jpeg"
import juniper1 from "../images/juniper1.jpeg"
import ButtonMailto from "./Mailto"
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';



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
            <iframe className="iframeJun" width="1000" height="450" src="https://www.youtube.com/embed/videoseries?si=rUuA1lranIXG4lLJ&amp;list=PLRH7TZXLLKdvgOqGOdcNdDlf3frxO21Od" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="directions3">
        <Text className="largerDirections">Check us out on  
        </Text>
        <a className="instaIcon" target="_blank" href="https://www.youtube.com/playlist?list=PLRH7TZXLLKdvgOqGOdcNdDlf3frxO21Od">
            <IconBrandYoutube />
        </a> 
    </div>
        <ScrollArea className="scrollArea1">
        <div className="scrollVids1">
        <iframe className="vid" src="https://www.youtube.com/embed/3SryOiV4ieg?si=bqYYGrfvM0rSl6gC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/bH-9PDwa-8w?si=ryxPT1CzKoNyzYbn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/vLO8yKSOtsU?si=uFqpn5OajGRDfgBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/mdkPMW9J-bs?si=8mZe2oKepCYI2Hic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/5slv7kUG4Qw?si=t2G2xWOXdPMxX6Cr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/0zbue1sWufg?si=6N8hMV0B32GgwZem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/9doA_ppWWto?si=Ae93V7Ej-6FFY4pM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/5wBliX0DHao?si=vCRCD9mmJjNmhdOB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </ScrollArea>
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