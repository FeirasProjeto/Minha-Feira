import { Autocomplete, IconButton, TextField } from "@mui/material";
import { Filter, SearchIcon, SortAsc } from "lucide-react";
import { useState } from "react";

interface Props {
  mock: TypeFeira[];
  setMockData: (mock: TypeFeira[]) => void;
}

export function Search({ mock, setMockData }: Props) {
  const [input, setInput] = useState("")
  return (
    <div className="flex w-full sticky top-0 z-50 rounded-2xl mb-5">
      <Autocomplete
        freeSolo
        sx={{
          width: "100%",
          ".MuiInputBase-root": {
            backgroundColor: "rgba(255, 255, 255)",
            borderRadius: "12px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          },
        }}
        options={mock.map((option) => option.nome)}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              ".MuiInputBase-root": {
                borderRadius: "12px",
              },
            }}
            label="Pesquisar"
            className="w-full rounded-xl"
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <div className="flex w-fit absolute right-0 top-0 h-full bg-secundaria-fraca items-center rounded-r-xl overflow-hidden">
                    <IconButton
                      onClick={() => {
                        setMockData(
                          mock.filter((option) =>
                            option.nome
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          )
                        );
                      }}
                      className="h-fit"
                    >
                      <SearchIcon className="text-white" />
                    </IconButton>
                    <IconButton className="h-fit">
                      <Filter className="text-white" />
                    </IconButton>
                    <IconButton className="h-fit">
                      <SortAsc className="text-white" />
                    </IconButton>
                  </div>
                ),
              },
            }}
          />
        )}
        onInputChange={(event, newInputValue) => {
          setInput(newInputValue);
        }}
      />
    </div>
  );
}
