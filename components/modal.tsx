import { IconButton, Modal } from "@mui/material";
import { Calendar, Clock, MapPin, X } from "lucide-react";

interface Props {
  feira: TypeFeira;
  openModal: (f: TypeFeira) => void;
  setOpen: (open: boolean) => void;
  open: boolean;
}

export function ModalFeira({ feira, openModal, setOpen, open }: Props) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-2xl overflow-hidden">
        {/* Image section */}
        <div className="h-40 bg-destaque-forte">
          {/* Placeholder for an image */}
          <img
            src={feira.imagem}
            alt={feira.nome}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "./logo.svg";
              (e.target as HTMLImageElement).className =
                "h-12 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
              (e.target as HTMLImageElement).alt = `${feira.nome} sem imagem`;
            }}
          />
          <IconButton
            className="absolute top-2 right-2"
            onClick={() => setOpen(false)}
          >
            <X />
          </IconButton>
        </div>
        {/* Info section */}
        <div className="p-4 ">
          <h3
            className="text-xl font-semibold text-secundaria-forte truncate"
            id="modal-title"
          >
            {feira.nome}
          </h3>
          {feira.tags && (
            <div className="mt-4 flex items-center space-x-2">
              {feira.tags?.map((tag) => (
                <div
                  key={tag.tag.id}
                  className="bg-secundaria-forte rounded-full px-2 py-1 text-sm text-white"
                >
                  {tag.tag.nome}
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex items-center space-x-4">
            <MapPin size={20} className="text-secundaria-forte" />
            <p className="text-sm text-secundaria-medio">
              {feira.endereco}, {feira.numero} - {feira.cidade}
            </p>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <Clock size={20} className="text-secundaria-forte" />
            <p className="text-sm text-secundaria-medio">{feira.horario}</p>
          </div>
          {feira.diaSemana?.length > 0 && (
            <div className="mt-4 flex items-center space-x-4">
              <Calendar size={20} className="text-secundaria-forte" />
              <p className="text-sm text-secundaria-medio">
                {feira.diaSemana.map((d) => d.diaSemana.nome).join(", ")}
              </p>
            </div>
          )}
          {feira.data && (
            <div className="mt-4 flex items-center space-x-4">
              <Calendar size={20} className="text-secundaria-forte" />
              <p className="text-sm text-secundaria-medio">
                {new Intl.DateTimeFormat("pt-BR", {
                  day: "numeric",
                  month: "long",
                }).format(new Date(feira.data))}
              </p>
            </div>
          )}
          <p className="mt-2 text-sm text-secundaria-medio">
            {feira.descricao}
          </p>
        </div>
      </div>
    </Modal>
  );
}
