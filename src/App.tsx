import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomePage from "./routes/HomePage"
import MerchantPage from "./routes/MerchantPage"
import MerchantDetail from "./components/MerchantDetail"
import ErrorPage from "./components/ErrorPage"
import ScrollToTop from "./lib/scrollToTop"
import { Merchant } from "./lib/features/merchant/merchantSlice"
import merchantJSON from "@/assets/merchants.json"

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
                        loader={({ params }): Merchant => {
                            const data = merchantJSON.filter((item: Merchant) => item.id === parseInt(params.id || ""))
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