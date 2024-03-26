import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./views/HomePage"
import Header from "./components/Header"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ])

  return (
    <>
      <Header white />
      <RouterProvider router={router} />
    </>
  )
}

export default App
