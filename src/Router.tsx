import { Routes, Route } from "react-router-dom"
import  Home from "./pages/Home"
import  Checkout  from "./pages/Checkout"
import { LayoutDefault } from "./layouts/LayoutDefault"

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<LayoutDefault />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout"  element={<Checkout />} />
            </Route>    
        </Routes>
    )
}