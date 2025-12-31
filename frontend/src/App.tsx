
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";
import WorkBench from "./pages/WorkBench";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/workbench" element={<WorkBench />} />
            </Routes>
        </>
    );
}

export default App
