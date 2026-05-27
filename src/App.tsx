import { Route, Routes } from "react-router-dom";

import AppLayout from "./Layouts/AppLayout";

import DashboardLA from "./pages/DasboardLA";
import Tareas from "./pages/Tareas";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardLA />} />

        <Route path="/revision-tareas" element={<Tareas />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
