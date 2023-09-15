import { Routes, Route } from "react-router-dom"

import Comeco from "./pages/Comeco"
import Termino from "./pages/Termino"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Comeco />} />
            <Route path="/termino" element={<Termino />} />
        </Routes>
    )
}

export default Router