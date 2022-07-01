import { useState } from "react"
import { HeaderDesktop, HeaderMobile } from "./styles"
import { motion } from "framer-motion";
import logo from "../../img/logos/Logo.png"
import hamburguerMenu from "../../img/menu/menu.png"
import exit from "../../img/menu/close.png"
import { Link} from "react-scroll";

const Header = () => {

    const [menu, setMenu] = useState(false)
    const [menuExit, setMenuExit] = useState(true)

    const menuClick = (setMenu, setMenuExit) => {
        setMenu(false)
        setMenuExit(true)
    }

    return(
        <>
            <HeaderMobile>

                <figure id="logo">
                    <Link onClick={() => menuClick(setMenu, setMenuExit)}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}>
                        <img src={logo} alt=""/>
                    </Link>
                </figure>

                {menuExit && (
                    <figure onClick={() => setMenu(true)}>
                        <motion.img onClick={() => setMenuExit(false)} src={hamburguerMenu} alt=""
                        initial={{ scale: 0 }}
                        animate={{ rotate: 180, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}/>
                    </figure>
                )}

                {menu && (
                    <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0 ,opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}>
                        <figure onClick={() => setMenu(false)}>
                            <motion.img onClick={() => setMenuExit(true)} src={exit} alt="Menu"
                            initial={{ scale: 0 }}
                            animate={{ rotate: 180, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20
                            }}
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: -90,
                                borderRadius: "100%"
                            }}
                        />
                        </figure>
                        <nav>
                            <Link onClick={() => menuClick(setMenu, setMenuExit)}
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}>Home</Link>
                            <Link onClick={() => menuClick(setMenu, setMenuExit)}
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}>Sobre</Link>
                            <Link onClick={() => menuClick(setMenu, setMenuExit)}
                                activeClass="active"
                                to="tecnologies"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}>Tecnologias</Link>
                            <Link onClick={() => menuClick(setMenu, setMenuExit)}
                                activeClass="active"
                                to="qualifications"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}>Qualificações</Link>
                            <Link onClick={() => menuClick(setMenu, setMenuExit)}
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}>Projetos</Link>
                            <Link onClick={() => menuClick(setMenu, setMenuExit)}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}>Contato</Link>
                        </nav>
                    </motion.div>
            )}
                
            </HeaderMobile>

            <HeaderDesktop>
                <figure id="logo">
                    <Link onClick={() => menuClick(setMenu, setMenuExit)}
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1500}>
                        <img src={logo} alt=""/>
                    </Link>
                </figure>
                <nav>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}>Home</Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}>Sobre</Link>
                    <Link
                        activeClass="active"
                        to="tecnologies"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}>Tecnologias</Link>
                    <Link
                        activeClass="active"
                        to="qualifications"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}>Qualificações</Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}>Projetos</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}>Contato
                    </Link>
                </nav>
            </HeaderDesktop>
        </>
    )
}

export default Header