interface TimelineEvent {
  titulo: string;
  dia: number;
  tipo: "ENTREGA" | "REVISION" | "PRESENTACION" | "REUNION";
}

const dias = [
  { nombre: "vie", fecha: "10 abr" },
  { nombre: "sáb", fecha: "11 abr" },
  { nombre: "dom", fecha: "12 abr" },
  { nombre: "lun", fecha: "13 abr" },
  { nombre: "mar", fecha: "14 abr" },
  { nombre: "mié", fecha: "15 abr" },
  { nombre: "jue", fecha: "16 abr" },
];

const categorias = [
  {
    tipo: "ENTREGA",
    label: "Entregas",
    color: "bg-red-500",
    softColor: "bg-red-100 text-red-700",
  },
  {
    tipo: "REVISION",
    label: "Revisiones",
    color: "bg-blue-600",
    softColor: "bg-blue-100 text-blue-700",
  },
  {
    tipo: "PRESENTACION",
    label: "Presentaciones",
    color: "bg-violet-500",
    softColor: "bg-violet-100 text-violet-700",
  },
  {
    tipo: "REUNION",
    label: "Reuniones",
    color: "bg-emerald-500",
    softColor: "bg-emerald-100 text-emerald-700",
  },
];

const eventos: TimelineEvent[] = [
  {
    titulo: "Entrega R1",
    dia: 2,
    tipo: "ENTREGA",
  },
  {
    titulo: "Revisión de Arquitectura",
    dia: 0,
    tipo: "REVISION",
  },
  {
    titulo: "Presentación al Cliente",
    dia: 0,
    tipo: "PRESENTACION",
  },
  {
    titulo: "Presentación de Avances",
    dia: 4,
    tipo: "PRESENTACION",
  },
  {
    titulo: "Taller de Estrategia",
    dia: 5,
    tipo: "REUNION",
  },
];

function Timeline() {
  return (
    <div className="rounded-2xl border border-border bg-background shadow-sm">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-2xl font-semibold text-zies-azul-1">
          Línea de Tiempo Semanal
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Vista estructurada de eventos de la semana
        </p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-8 border border-border">
          <div className="border-b border-r border-border p-4 text-sm text-muted-foreground">
            Día
          </div>

          {dias.map((dia, index) => (
            <div
              key={dia.nombre}
              className={`
                flex flex-col items-center justify-center
                border-b border-r border-border
                p-4 text-sm
                ${index === 3 ? "bg-zies-azul-2 text-white" : "bg-muted/30"}
              `}
            >
              <span className="font-semibold">{dia.nombre}</span>

              <span
                className={`mt-1 text-xs ${
                  index === 3 ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {dia.fecha}
              </span>
            </div>
          ))}

          {categorias.map((categoria) => (
            <>
              <div
                key={categoria.tipo}
                className="flex items-center gap-2 border-b border-r border-border p-4"
              >
                <div className={`h-3 w-3 rounded-full ${categoria.color}`} />

                <span className="text-sm text-zies-azul-1">
                  {categoria.label}
                </span>
              </div>

              {dias.map((_, diaIndex) => {
                const evento = eventos.find(
                  (e) => e.tipo === categoria.tipo && e.dia === diaIndex,
                );

                return (
                  <div
                    key={`${categoria.tipo}-${diaIndex}`}
                    className="
                      border-b border-r border-border
                      p-2 min-h-[68px]
                    "
                  >
                    {evento && (
                      <div
                        className={`
                          w-full rounded-lg px-3 py-2 text-xs font-medium
                          ${categoria.softColor}
                        `}
                      >
                        {evento.titulo}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-6">
          {categorias.map((categoria) => (
            <div key={categoria.tipo} className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${categoria.color}`} />

              <span className="text-xs text-muted-foreground">
                {categoria.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
