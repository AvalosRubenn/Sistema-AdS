import { Routes, Route } from "react-router-dom";

import AppLayout from "./Layouts/AppLayout";

import Login from "./pages/Login";
import DashboardLA from "./pages/DasboardLA";
import RevisionDeTareas from "./pages/RevisionDeTareas";
import Inbox from "./pages/Inbox";
import Arquitectos from "./pages/Arquitectos";

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

      <Route
        path="/inbox"
        element={
          <AppLayout>
            <Inbox />
          </AppLayout>
        }
      />

      <Route
        path="/arquitectos"
        element={
          <AppLayout>
            <Arquitectos />
          </AppLayout>
        }
      />
    </Routes>
  );
}

export default App;
