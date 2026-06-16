import { Routes, Route } from "react-router-dom";

import AppLayout from "./Layouts/AppLayout";

import Login from "./pages/Login";
import DashboardLA from "./pages/DasboardLA";
import RevisionDeTareas from "./pages/RevisionDeTareas";
import Inbox from "./pages/Inbox";
import Arquitectos from "./pages/Arquitectos";
import DashboardArq from "./pages/DashboardArq";

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

      <Route
        path="/dashboard-arq"
        element={
          <AppLayout>
            <DashboardArq />
          </AppLayout>
        }
      />
    </Routes>
  );
}

export default App;
