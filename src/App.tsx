import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Footer from "./components/Footer"
import HomePage from "./routes/HomePage"
import { PartnerCardProps, dummyData } from "./types/partner"
import MerchantPage from "./routes/MerchantPage"
import MerchantDetail from "./components/MerchantDetail"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/merchant" element={<MerchantPage />} >
                <Route
                    path=":id"
                    loader={({ params }): PartnerCardProps => {
                        const data = dummyData.filter((data) => data.id === Number(params.id))
                        return data[0]
                    }}
                    element={<MerchantDetail />}
                />
            </Route>
        </>
    )
)

function App() {

    return (
        <>
            <RouterProvider router={router} />
            <Footer />
        </>
    )
}
export default App