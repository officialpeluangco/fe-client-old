import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomePage from "./routes/HomePage"
import { PartnerCardProps, dummyData } from "./types/partner"
import MerchantPage from "./routes/MerchantPage"
import MerchantDetail from "./components/MerchantDetail"
import ErrorPage from "./components/ErrorPage"
import ScrollToTop from "./lib/scrollToTop"

const AppLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppLayout />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/merchant" element={<MerchantPage />} errorElement={<ErrorPage />} >
                    <Route
                        path=":id"
                        loader={({ params }): PartnerCardProps => {
                            const data = dummyData.filter((data) => data.id === Number(params.id))
                            return data[0]
                        }}
                        element={<MerchantDetail />}
                    />
                </Route>
            </Route>
        </>
    )
)

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
export default App