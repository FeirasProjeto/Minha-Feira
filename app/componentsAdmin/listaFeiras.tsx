async function AprovaFeira(feiraId: string, refresh: () => void) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/aprovar/${feiraId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      alert('Erro ao aprovar feira');
      return
    }

    alert('Feira aprovada com sucesso');
    refresh();

  } catch (error) {
    console.error('Erro ao aprovar feira:', error);
    alert('Erro ao aprovar feira');
  }

}
export function ListaFeiras({ data, refresh }: any) {
  return (
    <div key={data.id} className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-150">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Imagem */}
          <div className="flex-shrink-0">
            <img
              className="w-12 h-12 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
              src={data.imagem}
              alt={data.nome}
            />
          </div>

          {/* Informações */}
          <div className="min-w-0">
            <p className="text-base font-medium text-gray-900 dark:text-white truncate">
              {data.nome}
            </p>
            <div className="mt-1">
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => AprovaFeira(data.id, refresh)}
            className="
      inline-flex items-center gap-2
      px-3 py-2
      bg-green-600 text-white
      hover:bg-green-700
      dark:bg-green-700 dark:hover:bg-green-800
      rounded-lg
      transition-all duration-200
      font-medium
      text-sm
    "
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Aprovar
          </button>
        </div>

      </div>
    </div>
  )
}