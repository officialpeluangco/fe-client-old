import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./routes/HomePage"
import MerchantPage from "./routes/MerchantPage"

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/merchant" element={<MerchantPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App