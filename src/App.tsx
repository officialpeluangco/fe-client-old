import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomePage from "./routes/HomePage"
import MerchantPage from "./routes/MerchantPage"
import MerchantDetail from "./components/MerchantDetail"
import ErrorPage from "./components/ErrorPage"
import ScrollToTop from "./lib/scrollToTop"
import merchantImages from "@/assets/merchants.json"

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
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        loader={({ params }): any => {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const data = merchantImages.filter((item: any) => item.id === parseInt(params.id || ""))
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