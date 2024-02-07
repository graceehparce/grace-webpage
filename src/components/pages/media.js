import "./media.css"
import { Image, Text, Button, ScrollArea } from "@mantine/core"
import aboutPic from "../images/aboutPic2.jpg"
import ButtonMailto from "./Mailto"
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';

export const MediaPage = () => {

    return (<div className="wholePage">
    <div className="directions2">
        <Text className="largerDirections">Follow Me on 
        </Text>
        <a className="instaIcon" target="_blank" href="https://www.youtube.com/@GracieParce">
            <IconBrandYoutube />
        </a> 
    </div>
    <ScrollArea className="scrollArea">
        <div className="scrollVids">
            <iframe className="vid"  src="https://www.youtube.com/embed/UTMVMRNALOI?si=TwMgZq2GFUFVagF3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="vid"  src="https://www.youtube.com/embed/bHMfjOTmETU?si=VLDyyHumTSFDti1q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                   
            <iframe className="vid"  src="https://www.youtube.com/embed/nfaQ1uxwkBU?si=6RhL0c9RNRFlK9CS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                   
            <iframe className="vid"  src="https://www.youtube.com/embed/Q5Um2adffN0?si=zHxNC4ZZubfU8o3X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
            <iframe className="vid"  src="https://www.youtube.com/embed/Hfi4Ga1iBKU?si=lYtjKvf41yDmYsYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </ScrollArea>
    <div className="directions2">
        <Text className="largerDirections">Juniper Duo on 
        </Text>
        <a className="instaIcon" target="_blank" href="https://www.youtube.com/playlist?list=PLRH7TZXLLKdvgOqGOdcNdDlf3frxO21Od">
            <IconBrandYoutube />
        </a> 
    </div>
    <ScrollArea className="scrollArea">
        <div className="scrollVids">
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
    <div className="directions2">
        <Text className="largerDirections">Misc Media 
        </Text>
    </div>
    <ScrollArea className="scrollArea">
        <div className="scrollVids">
        <iframe className="vid" src="https://www.youtube.com/embed/NT0HcAr9aeI?si=xdn_iz0OBLtt45Ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        <iframe className="vid" src="https://www.youtube.com/embed/c3Mnf87q9v8?si=QnPhjcLcAdPOAnuB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>       
        <iframe className="vid" src="https://www.youtube.com/embed/0jgyktsbl28?si=G7Y2alALur_LRoBu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        <iframe className="vid" src="https://www.youtube.com/embed/0gNAfKRteFE?si=CeDmX9bxz-3_wwpP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        <iframe className="vid" src="https://www.youtube.com/embed/NrQSGggiAxM?si=b_swEmxrFnT9miOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/wtQBQDaE4Pg?si=QjiEFrRA0M3BpB7d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="vid" src="https://www.youtube.com/embed/SWgAlZjf760?si=-NlSSroI5bzIyeZF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </ScrollArea>

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