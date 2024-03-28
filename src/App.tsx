import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./views/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MerchantPage from "./views/MerchantPage"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/merchant",
      element: <MerchantPage />,
    },
  ])

  const path = window.location.pathname

  return (
    <>
      <Header white={path==='/'} />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
