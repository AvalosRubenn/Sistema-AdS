import { Routes, Route } from "react-router-dom";

import AppLayout from "./Layouts/AppLayout";

import Login from "./pages/Login";
import DashboardLA from "./pages/DasboardLA";
import RevisionDeTareas from "./pages/RevisionDeTareas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboardLA"
        element={
          <AppLayout>
            <DashboardLA />
          </AppLayout>
        }
      />

      <Route
        path="/revision-tareas"
        element={
          <AppLayout>
            <RevisionDeTareas />
          </AppLayout>
        }
      />
    </Routes>
  );
}

export default App;
