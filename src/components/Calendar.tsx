function Calendar() {
  return (
    <div className="col-span-9 rounded-2xl border border-border bg-background p-6 shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-6xl font-light">Mayo</h2>
        <p className="mt-2 text-lg text-muted-foreground">2026</p>
        <div className="mt-6">
          <h3 className="text-7xl font-light text-zies-azul-2">18</h3>
          <p className="mt-2 text-base text-muted-foreground">lunes</p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-7 gap-4 text-center text-sm text-muted-foreground">
        <span>Dom</span>
        <span>Lun</span>
        <span>Mar</span>
        <span>Mié</span>
        <span>Jue</span>
        <span>Vie</span>
        <span>Sáb</span>
      </div>

      <div className="grid grid-cols-7 gap-4">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          1
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          2
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          3
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          4
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          5
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          6
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          7
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          8
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          9
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          10
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          11
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          12
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          13
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          14
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          15
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          16
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          17
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border bg-zies-azul-2 text-white">
          18
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          19
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          20
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          21
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          22
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          23
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          24
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          25
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          26
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          27
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          28
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          29
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          30
        </div>
        <div className="flex h-30 items-center justify-center rounded-2xl border border-border">
          31
        </div>
      </div>

      <div className="rounded-xl border border-border bg-muted mt-8">
        <div className="flex justify-between items-center p-4 py-8">
          <h3>lunes, 18 de mayo</h3>
          <button className="py-2 px-4 bg-background rounded-xl text-muted-foreground">
            Cerrar
          </button>
        </div>
        <div className="rounded-xl bg-background mx-4 flex flex-col p-4 mb-4">
          <div className="flex items-center  gap-2">
            <div className="rounded-full w-4 h-4 bg-purple-500" />
            <p className="text-xl">Presentación al cliente</p>
          </div>
          <div className="p-1 rounded-md bg-muted w-fit ml-6">
            <p className="text-purple-500">Presentación</p>
          </div>
        </div>
        <div className="rounded-xl bg-background mx-4 flex flex-col p-4 mb-4">
          <div className="flex items-center  gap-2">
            <div className="rounded-full w-4 h-4 bg-zies-azul-2" />
            <p className="text-xl">Revisión de arquitectura</p>
          </div>
          <div className="p-1 rounded-md bg-muted w-fit ml-6">
            <p className="text-zies-azul-2">Revisión</p>
          </div>
        </div>
      </div>

      <button className="text-white bg-zies-azul-2 w-full rounded-xl py-4 my-3 text-xl">
        Nuevo Evento
      </button>
    </div>
  );
}

export default Calendar;
