import { Route, Routes } from "react-router-dom";

import AppLayout from "./Layouts/AppLayout";

import DashboardLA from "./pages/DasboardLA";
import RevisionDeTareas from "./pages/RevisionDeTareas";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardLA />} />

        <Route path="/revision-tareas" element={<RevisionDeTareas />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
