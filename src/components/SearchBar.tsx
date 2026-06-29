import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="relative mb-6">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <input
        type="text"
        placeholder="Buscar..."
        className="h-11 w-full rounded-xl border border-border bg-background pl-11 pr-4"
      />
    </div>
  );
}

export default SearchBar;
