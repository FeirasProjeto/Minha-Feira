import { Autocomplete, IconButton, TextField } from "@mui/material";
import { Filter, SearchIcon, SortAsc } from "lucide-react";
import { useState } from "react";

interface Props {
  mock: TypeFeira[];
  setMockData: (mock: TypeFeira[]) => void;
}

export function Search({ mock, setMockData }: Props) {
  const [input, setInput] = useState("");
  return (
    <div className="flex w-full sticky top-0 z-50 rounded-2xl overflow-hidden border border-black bg-white">
      {/* TODO fix border on hover */}
      <Autocomplete
        freeSolo
        disableClearable
        sx={{
          width: "100%",
        }}
        options={mock.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              width: "100%",
            }}
            label="Search input"
            className="w-full rounded-xl overflow-hidden "
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <div className="flex w-fit absolute right-0 top-0 h-full bg-secundaria-fraca items-center">
                    <IconButton
                      onClick={() => {
                        setMockData(
                          mock.filter((option) =>
                            option.name
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
