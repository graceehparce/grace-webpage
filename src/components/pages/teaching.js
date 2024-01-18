import { Image, Text, Button } from "@mantine/core"
import ncms1 from "../images/ncms1.jpg"
import "./teaching.css"
import ButtonMailto from "./Mailto"
import { IconBrandInstagram } from '@tabler/icons-react';




export const TeachingPage = () => {

    return (<div className="wholePage">
        <div className="teachBox">
        <Image src={ncms1} className="ncmsPic">
        </Image>
        <Text className="teachText">
            <h2>Grace's Teaching Philosophy</h2>
            As an educator, Grace's main priority is to get to know her students as the unique individuals that they are. Building a solid foundation of cello technique is only the first step for a teacher of her nature. Grace strives to build supportive and inspiring relationships with her students, utilizing music to build character, artistry, and confidence. Grace is a Suzuki certified cello teacher, so many of her teaching tactics are based around the same methodology involved in language acquisition. However, Grace teaches students of all levels, ages and backgrounds. She works hard to develop a teaching curriculum relevant to the needs of each individual.
            <br></br><br></br>
            If you're interested in lessons, please reach out! I am always accepting new students into my studio, whether it be online or in-person. We'll find what works best for you and your cello journey!
            <br></br><br></br>
            <Button variant="dark"
                color="dark"
                radius={20}>
            <ButtonMailto class="emailButton" label="Contact" mailto="mailto:graceehparce@gmail.com" />
        </Button>
        </Text>
        
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