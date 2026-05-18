import { Inbox, LayoutDashboard, LogOut, User } from "lucide-react";

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="border-b border-border px-6 py-5">
        <img src="/logo.png" alt="Zies logo" className="w-20" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2 p-4">
        <button
          className="
            flex items-center gap-3
            rounded-lg
            bg-zies-azul-2
            px-4 py-3
            text-white
            transition-colors
            hover:opacity-90
          "
        >
          <LayoutDashboard size={20} />
          <span className="font-medium">Dashboard</span>
        </button>

        <button
          className="
            flex items-center gap-3
            rounded-lg
            px-4 py-3
            text-foreground
            transition-colors
            hover:bg-accent
          "
        >
          <Inbox size={20} />
          <span className="font-medium">Inbox</span>
        </button>
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        {/* User */}
        <div className="mb-4 flex items-center gap-3 rounded-lg p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zies-azul-2 text-white">
            <User size={18} />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              Leader User
            </span>

            <span className="text-xs text-muted-foreground">
              Project Leader
            </span>
          </div>
        </div>

        {/* Logout */}
        <button
          className="
            flex w-full items-center gap-3
            rounded-lg
            px-3 py-2
            text-red-500
            transition-colors
            hover:bg-red-50
          "
        >
          <LogOut size={18} />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
