import "./about.css"
import { Image, Text, Button, ScrollArea } from "@mantine/core"
import aboutPic from "../images/aboutPic2.jpg"
import ButtonMailto from "./Mailto"
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';

export const AboutPage = () => {

    return (<div className="wholePage">
    <div className="teachBox">
    <Image src={aboutPic} className="ncmsPic">
    </Image>
    <Text className="teachText">
        <h2>Biography</h2>
        Grace is a dedicated cellist and teacher, driven by a desire to share the beauty, creativity,
and collaborative spirit that have become her hallmarks. Renowned for her versatility, she
has excelled in diverse musical realms, including orchestral performances, Broadway
shows, and studio recordings.<br></br><br></br>
In 2021, Grace took center stage as the cellist for the national Broadway revival tour of
"Oklahoma!" and later briefly joined the "Hadestown" national Broadway tour as well. Her
musical contributions extend to studio recordings for major platforms such as Netflix,
Sony, Bungee, and Hulu. Grace has recorded and performed with notable figures like
Carrie Underwood, Dan & Shay, Cody Fry, and others. Since earning her Master’s degree
in 2017, she has performed with orchestras across the United States, collaborating with
renowned ensembles such as the Nashville Symphony, Cincinnati Symphony Orchestra,
Alabama Symphony, and the Louisville Orchestra. Her orchestral passion led her to
participate in esteemed festivals, including the Lakes Area Music Festival, Brevard Music
Center, Chautauqua Institute, National Orchestral Institute, and Festival Napa Valley.
Beyond the orchestral realm, Grace actively engages in community-driven initiatives. In
Cincinnati, she contributed to the Kairos Collective, a chamber music group dedicated to
bringing classical music to alternative venues. There she also served as a Concert Nova
Teaching Artist, further fostering her commitment to music education and the intimacy of
chamber music. In Nashville, she continued her community involvement with the
innovative Nashville Chamber Music Society.<br></br><br></br>
In 2020, Grace, along with her husband Anthony Parce, co-founded the Juniper Duo.
Their recently released video album "Emerge" showcases new transcriptions, works by
emerging composers, and even an original composition. The Juniper Duo has
participated in concert series, including the Chamber Music Series with the Nashville
Symphony and the Nashville Chamber Music Society.<br></br><br></br>
As a Suzuki Certified cello teacher, Grace initiated a Suzuki Cello Program at the
Northern Kentucky School of Music in 2018. Her commitment to education extended to
Miami University, where she taught as a visiting faculty member from 2018-2019 and
offered private lessons in various music academies and school districts nationwide.
Grace's teaching philosophy embraces a holistic approach to music education, using
music as a tool to foster confidence and personal growth in her students. She believes in
making music both challenging and awe-inspiring, creating an attitude of appreciation for
the musical journey. Her students not only develop technical prowess but also cultivate a
deep appreciation for the art form.<br></br><br></br>
Grace holds Bachelor of Music and Master of Music degrees in Cello Performance from
Cincinnati’s College-Conservatory of Music, studying under Ilya Finkelshtyen, principal
cellist of the Cincinnati Symphony Orchestra. She currently performs on a Caressa and
Francais cello, crafted in 1912.
        <br></br><br></br>
       
    </Text>
    
    </div>
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


