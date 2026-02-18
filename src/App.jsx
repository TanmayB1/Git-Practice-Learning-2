import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import {HomePage,AboutPage,LoginPage,CreateResumePage, ResumePreviewPage} from "./Pages"
import { useEffect } from "react"
import RequireAuth from "./Components/RequireAuth"

function App(){

  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="create-resume" element={<CreateResumePage></CreateResumePage>}></Route>
      <Route path="login" element={<LoginPage></LoginPage>}></Route>
      <Route path="about" element={<AboutPage></AboutPage>}></Route>
      <Route path="resume-preview" element={<RequireAuth><ResumePreviewPage></ResumePreviewPage></RequireAuth>}></Route>
    </Route>
  ))


  useEffect(()=>{
    window.addEventListener("load",()=>{
      localStorage.clear()
    })
  },[])

  return(
    <RouterProvider router={router}/>
  )
}

export default App