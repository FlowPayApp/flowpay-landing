function KPI({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: "paid" | "overdue";
}) {
  const border =
    accent === "paid"
      ? "border-l-4 border-paid"
      : accent === "overdue"
        ? "border-l-4 border-overdue"
        : "";
  const valueColor =
    accent === "paid"
      ? "text-paid"
      : accent === "overdue"
        ? "text-overdue"
        : "text-foreground";
  return (
    <div
      className={`p-6 rounded-2xl bg-secondary/60 ring-1 ring-border ${border}`}
    >
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </p>
      <p className={`text-2xl md:text-3xl font-bold font-mono ${valueColor}`}>
        {value}
      </p>
    </div>
  );
}

function ChargeRow({
  name,
  status,
  amount,
  date,
}: {
  name: string;
  status: "overdue" | "pending" | "paid";
  amount: string;
  date: string;
}) {
  const cfg = {
    overdue: { label: "Vencido", cls: "bg-overdue/10 text-overdue" },
    pending: { label: "Pendiente", cls: "bg-pending/10 text-pending" },
    paid: { label: "Pagado", cls: "bg-paid/10 text-paid" },
  }[status];
  return (
    <tr>
      <td className="py-4 font-semibold">{name}</td>
      <td className="py-4">
        <span
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${cfg.cls}`}
        >
          {cfg.label}
        </span>
      </td>
      <td className="py-4 text-right font-mono">{amount}</td>
      <td className="py-4 text-right text-muted-foreground">{date}</td>
    </tr>
  );
}

/** Vista ilustrativa del panel; los montos y nombres son ficticios. */
export function DashboardPreview() {
  return (
    <div id="producto" className="relative scroll-mt-24">
      <p className="text-center text-xs text-muted-foreground mb-3 font-medium">
        Vista de ejemplo — datos ficticios, no clientes reales
      </p>
      <div className="fp-preview-shell bg-card rounded-2xl shadow-2xl ring-1 ring-foreground/5 p-4 md:p-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <KPI label="Por cobrar" value="$14.250.000" />
          <KPI label="Vencido" value="$3.890.000" accent="overdue" />
          <KPI label="Cobrado (mes)" value="$28.400.000" accent="paid" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="border-b border-border">
              <tr className="text-muted-foreground text-xs uppercase font-bold tracking-wider">
                <th className="pb-4 text-left">Cliente</th>
                <th className="pb-4 text-left">Estado</th>
                <th className="pb-4 text-right">Monto</th>
                <th className="pb-4 text-right">Vencimiento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <ChargeRow
                name="Ejemplo Constructora SpA"
                status="overdue"
                amount="$1.250.000"
                date="12 mar 2025"
              />
              <ChargeRow
                name="Ejemplo Servicios Ltda."
                status="pending"
                amount="$890.000"
                date="28 mar 2025"
              />
              <ChargeRow
                name="Ejemplo Comercial SA"
                status="paid"
                amount="$2.100.000"
                date="15 mar 2025"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
