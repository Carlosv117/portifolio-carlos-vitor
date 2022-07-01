import { useState } from "react"
import { HeaderDesktop, HeaderMobile } from "./styles"
import { motion } from "framer-motion";
import logo from "../../img/logos/Logo.png"
import hamburguerMenu from "../../img/menu/menu.png"
import exit from "../../img/menu/close.png"

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
                    <img src={logo} alt=""/>
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
                        <figure onClick={() => menuClick(setMenu, setMenuExit)}>
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
                            <a href="#home" onClick={() => menuClick(setMenu, setMenuExit)}>Home</a>
                            <a href="#about" onClick={() => menuClick(setMenu, setMenuExit)}>Sobre</a>
                            <a href="#tecnologies" onClick={() => menuClick(setMenu, setMenuExit)}>Tecnologias</a>
                            <a href="#qualifications" onClick={() => menuClick(setMenu, setMenuExit)}>Qualificações</a>
                            <a href="#projects" onClick={() => menuClick(setMenu, setMenuExit)}>Projetos</a>
                            <a href="#contact" onClick={() => menuClick(setMenu, setMenuExit)}>Contato</a>
                        </nav>
                    </motion.div>
                )}
                
            </HeaderMobile>

            <HeaderDesktop>
                <figure id="logo">
                    <img src={logo} alt=""/>
                </figure>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">Sobre</a>
                    <a href="#tecnologies">Tecnologias</a>
                    <a href="#qualifications">Qualificações</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
                </nav>
            </HeaderDesktop>
        </>
    )
}

export default Header