import { AnimatePresence } from "framer-motion"
import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"

export const RoutesPages = () => {

    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/Contato" element="{<Contact/>}"/>
            </Routes>
        </AnimatePresence>
    )
}