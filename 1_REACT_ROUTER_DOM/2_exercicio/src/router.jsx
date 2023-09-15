import { Routes, Route } from "react-router-dom"

import Comeco from "./pages/Comeco"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Comeco />} />
        </Routes>
    )
}

export default Router