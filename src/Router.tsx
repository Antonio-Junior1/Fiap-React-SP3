import { Route, Routes } from "react-router-dom";
import Home from "./pages/PortoHome";
import Servico from "./pages/ServicoPorto";
import Login from "./pages/Login";



export function Router(){

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Servico" element={<Servico />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    )
}