import Widget from "./components/widgets";
import Chart from "./components/graficos";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">

      {/* Grid mobile-first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Widget title="Usuários" value="124" />
        <Widget title="Pedidos" value="87" />
        <Widget title="Feiras Ativas" value="14" />
        <Widget title="Cancelamentos" value="8" />
      </div>

      {/* Cards de gráfico */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72">
          <p className="text-gray-300 mb-3">Gráfico 1</p>
          {/* componente do gráfico */}
        </div>

        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 h-72">
          <p className="text-gray-300 mb-3">Gráfico 2</p>
          {/* componente do gráfico */}
        </div>
      </div>

    </div>
  );
}

