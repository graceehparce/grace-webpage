import { NavBar } from "../nav/NavBar"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { AboutPage } from "../pages/about"
import { TeachingPage } from "../pages/teaching"
import { JuniperPage } from "../pages/juniper"
import { ForgetPage } from "../pages/forget"
import { MediaPage } from "../pages/media"


export const ApplicationViews = () => {

    return <>
        <NavBar />
        <Routes>

            <Route path="" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/teach" element={<TeachingPage />} />
            <Route path="/juniperDuo" element={<JuniperPage />} />
            <Route path="/forget" element={<ForgetPage />} />
            <Route path="/media" element={<MediaPage />} />




        </Routes>
    </>
}


