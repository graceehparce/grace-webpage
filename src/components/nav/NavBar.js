import './NavBar.css'
import { Text, Menu, Button, Image } from "@mantine/core"
import { Link, useNavigate } from 'react-router-dom'
import { IconMenu, IconPhone, IconMail, IconMenu2 } from '@tabler/icons-react';
import ButtonMailto from '../pages/Mailto';
import logoPic from "../images/GracieParce4.png"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar">
            <section className='titleSection'>
                <Link className="titleLink" to="">
                    <Text className='logoTitle'>GRACE PARCE</Text>&nbsp;<Text className='cellist'></Text>
                {/* <Image
                    className='logoImage'
                    radius="md"
                    w="auto"
                    fit="contain"
                    src={logoPic}
                    /> */}
                </Link>
                {/* <section className='contact'>
                    <div className='withIcon'>
                        <IconMail stroke-width="1" size={16}/>
                        <ButtonMailto class="emailButton2" label="graceehparce@gmail.com" mailto="mailto:graceehparce@gmail.com" />
                    </div>
                    <div className='withIcon'>
                        <IconPhone stroke-width="1" size={16}/>
                        <Text className='phone'>(919)434-1278</Text>
                    </div>
                </section> */}
            </section>
            <section className="navDropDown">
                <Menu
                    width={400}
                    transition="scale"
                    trigger="hover"
                    openDelay={50}
                    closeDelay={100}
                >
                    <Menu.Target>
                        <Button size="md">
                            <IconMenu2 />
                        </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item
                            onClick={() => {
                                navigate("");
                            }}
                        >
                            Home
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => {
                                navigate("/about");
                            }}
                        >
                            About
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => {
                                navigate("/teach");
                            }}
                        >
                            Teaching
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => {
                                navigate("/juniperDuo");
                            }}
                        >
                            Juniper Duo
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => {
                                navigate("/forget");
                            }}
                        >
                            Forget Me Knots
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => {
                                navigate("/media");
                            }}
                        >
                            Media
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </section>
        </nav >
    )
}



