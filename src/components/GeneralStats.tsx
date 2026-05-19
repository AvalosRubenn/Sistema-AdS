interface GeneralStatsProps {
  ADSR1: number;
  ADSR2: number;
  ADSR3: number;
  ADSCNBV: number;
  ADSDiscovery: number;
  Asesorias: number;
  buenaSalud: number;
  mediaSalud: number;
  malaSalud: number;
}

function GeneralStats({
  ADSR1,
  ADSR2,
  ADSR3,
  ADSCNBV,
  ADSDiscovery,
  Asesorias,
  buenaSalud,
  mediaSalud,
  malaSalud,
}: GeneralStatsProps) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold"> Estadísticas Generales </h2>

      <div className="grid grid-cols-2 gap-4">
        <StatWrapper nombre="ADS R1" cantidad={ADSR1} />
        <StatWrapper nombre="ADS R2" cantidad={ADSR2} />
        <StatWrapper nombre="ADS R3" cantidad={ADSR3} />
        <StatWrapper nombre="ADS CNBV" cantidad={ADSCNBV} />
        <StatWrapper nombre="ADS Discovery" cantidad={ADSDiscovery} />
        <StatWrapper nombre="ADS Asesorias" cantidad={Asesorias} />
      </div>

      <div className="mt-6">
        <p className="mb-3 text-xs text-muted-foreground">
          Distribución de Salud
        </p>

        <div className="flex items-center gap-4 text-xs">
          <div className="h-3 w-3 rounded-full bg-success" />
          <span>{buenaSalud}</span>

          <div className="h-3 w-3 rounded-full bg-warning" />
          <span>{mediaSalud}</span>

          <div className="h-3 w-3 rounded-full bg-error" />
          <span>{malaSalud}</span>
        </div>
      </div>
    </div>
  );
}

interface StatWrapperProps {
  nombre: string;
  cantidad: number;
}

{
  /*Ojalá esto no sea una mala práctica :p*/
}

function StatWrapper({ nombre, cantidad }: StatWrapperProps) {
  return (
    <div className="rounded-xl bg-muted p-4">
      <p className="text-xs text-muted-foreground">{nombre}</p>
      <h3 className="mt-2 text-2xl font-bold text-zies-azul-1">{cantidad}</h3>
    </div>
  );
}

export default GeneralStats;
