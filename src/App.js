import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import MyFeed from "./pages/MyFeed/MyFeed"
import History from "./pages/History/History"
import MyProfile from "./pages/MyProfile/MyProfile"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MyFeed />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
