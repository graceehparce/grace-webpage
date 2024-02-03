import "./home.css"
import { Text, Menu, Button, Image, Card, ScrollArea } from "@mantine/core"
import { Link, useNavigate } from "react-router-dom"
import aboutImg from "../images/about.jpeg"
import juniper1 from "../images/juniper1.jpeg"
import juniper2 from "../images/juniper2.jpeg"
import juniper3 from "../images/juniper3.jpeg"
import juniper4 from "../images/juniper4.jpeg"
import juniper5 from "../images/juniper5.jpeg"
import juniper6 from "../images/juniper6.jpeg"
import juniper7 from "../images/juniper7.jpeg"
import juniper8 from "../images/juniper8.jpeg"
import juniper9 from "../images/juniper9.jpeg"
import juniper10 from "../images/juniper10.jpeg"
import juniper11 from "../images/juniper11.jpeg"
import juniper12 from "../images/juniper12.jpeg"
import juniper13 from "../images/juniper13.jpeg"
import juniper14 from "../images/juniper14.jpeg"
import juniper15 from "../images/juniper15.jpeg"
import macLogo from "../images/macLogo.jpg"
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';





export const HomePage = () => {
    const navigate = useNavigate()

    return (<section className="homeWhole"><div className="homeBackground">
        <Text className="nameTitle"></Text>
    </div >
        <div className="aboutCard" px={0}>
            <div className="aboutSection0">
            <div className="imageBox">
                    <Image
                        src={aboutImg}
                        alt="With custom placeholder"
                        withPlaceholder></Image>
                </div>
                    <div className="aboutText"> 
                    <div className="sectionTitle">ABOUT</div>
                    Grace is a dedicated cellist and teacher, driven by a desire to share the beauty, creativity,
                    and collaborative spirit that have become her hallmarks. Renowned for her versatility, she
                    has excelled in diverse musical realms, including orchestral performances, Broadway
                    shows, and studio recordings.
                    In 2021, Grace took center stage as the cellist for the national Broadway revival tour of
                    "Oklahoma!" and later briefly joined the "Hadestown" national Broadway tour as well. Her
                    musical contributions extend to studio recordings for major platforms such as Netflix,
                    Sony, Bungee, and Hulu. Grace has recorded and performed with notable figures like
                    Carrie Underwood, Dan & Shay, Cody Fry, and others. Since earning her Master’s degree
                    in 2017, she has performed with orchestras across the United States, collaborating with
                    renowned ensembles such as the Nashville Symphony, Cincinnati Symphony Orchestra,
                    Alabama Symphony, and the Louisville Orchestra...                        <br></br>
                                            <br></br>
                        <Button variant="light"
                            color="dark"
                            onClick={() => {
                                navigate({ pathname: `/about` })
                            }}>Read More...</Button>
                    </div>
                    
                

            </div>
        </div>
        <Link className="juniperTitleLink" to="/juniperDuo">
            <div className="juniperTitle">THE JUNIPER DUO</div>
            <div className="juniperSection">
                <ScrollArea style={{ height: 400 }}>
                    <div className="scrollPics">
                        <Image src={juniper1} height={400} width={300}></Image>
                        <Image src={juniper6} height={400} width={300}></Image>
                        <Image src={juniper3} height={400} width={300}></Image>
                        <Image src={juniper5} height={400} width={300}></Image>
                        <Image src={juniper15} height={400} width={300}></Image>
                        <Image src={juniper8} height={400} width={300}></Image>
                        <Image src={juniper2} height={400} width={300}></Image>
                        <Image src={juniper4} height={400} width={300}></Image>
                        <Image src={juniper7} height={400} width={300}></Image>
                        <Image src={juniper11} height={400} width={300}></Image>
                        <Image src={juniper12} height={400} width={300}></Image>
                    </div>
                </ScrollArea>
            </div>
        </Link>
        <div className="teachingSection">
            <div className="sectionTitle">TEACHING</div>
            <div className="quotes">
                <div className="teachingQuote1">"...kind and knowledgeable, patient and professional..."</div>
                <div className="teachingQuote2">"...so creative with her ability to engage with him and meet him on his level..."</div>
                <div className="teachingQuote3">"...able to challenge our daughter to the best of her abilities while still making lessons enjoyable...</div>
                <div className="teachingQuote4">"...I learned more and was able to play more than I ever thought I could..</div>
                <Button variant="light"
                    color="dark"
                    radius={20}
                    onClick={() => {
                        navigate({ pathname: `/teach` })
                    }}>Teaching Philosophy...</Button>
            </div>
        </div>

        <div className="macBox">
            <div className="macInnerBox">
                <Image src={macLogo} height={200} width={250} radius={10} className="logo"></Image>
                <Button variant="light"
                    color="dark"
                    radius={20}
                    onClick={() => {
                        navigate({ pathname: `/forget` })
                    }}>Check it out!</Button>
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
    </section >
    )
}