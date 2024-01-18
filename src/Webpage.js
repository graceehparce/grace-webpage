import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/views/ApplicationsViews"



export const Webpage = () => {
  return <div className="html">
    <Routes>
      <Route path="*" element={
        <>
          <ApplicationViews />
        </>

      } />
    </Routes>
  </div>
}
