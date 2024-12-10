import { Autocomplete, IconButton, TextField } from "@mui/material";
import { Filter, SearchIcon, SortAsc, SortDesc } from "lucide-react";
import { useState } from "react";
import FilterButton from "./filter";

interface Props {
  mock: TypeFeira[];
  setMockData: (mock: TypeFeira[]) => void;
  defaultFeiras: TypeFeira[];
}

export function Search({ mock, setMockData, defaultFeiras }: Props) {
  const [input, setInput] = useState("");
  const [order, setOrder] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selTags, setSelTags] = useState<Tag[]>([]);

  function onClickOrder() {
    setOrder((prev) => {
      const sorted = [...mock].sort((a, b) =>
        prev
          ? new Date(a.data) < new Date(b.data)
            ? -1
            : new Date(a.data) > new Date(b.data)
            ? 1
            : 0
          : new Date(a.data) > new Date(b.data)
          ? -1
          : new Date(a.data) < new Date(b.data)
          ? 1
          : 0
      );
      setMockData(sorted);
      return !prev;
    });
  }

  function onSendFilter(e: Tag[]) {
    setSelTags(e);
    if (e.length == 0) {
      setMockData(defaultFeiras);
    } else {
      setMockData(
        defaultFeiras.filter((option) => {
          return option.tags.some((tag) => e.some((t) => t.id === tag.tag.id));
        })
      );
    }
  }

  return (
    <div className="flex sticky top-5 z-50 rounded-2xl mb-5 mx-5 mt-5">
      <div className="w-full rounded-xl p-2 flex justify-between">
        <Autocomplete
          freeSolo
          sx={{
            width: "100%",
            ".MuiInputBase-root": {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
          options={mock.map((option) => option.nome)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Pesquisar"
              className="w-full"
              sx={{
                backgroundColor: "white",
              }}
              slotProps={{
                input: {
                  ...params.InputProps,
                  type: "search",
                },
              }}
              onFocus={(e) => e.stopPropagation()}
            />
          )}
          onInputChange={(event, newInputValue) => {
            setInput(newInputValue);
          }}
        />
        <div className="flex h-full rounded-r-2xl items-center bg-secundaria-fraca">
          <IconButton
            onClick={(e) => {
              if (input.length == 0) {
                setMockData(defaultFeiras);
                return
              }
              setMockData(
                mock.filter((option) =>
                  option.nome.toLowerCase().includes(input.toLowerCase())
                )
              );
              e.stopPropagation();
            }}
            className="h-fit"
          >
            <SearchIcon className="text-white" />
          </IconButton>
          <FilterButton
            setTags={setTags}
            tags={tags}
            setSelTags={onSendFilter}
            selTags={selTags}
          />
          <IconButton
            className="h-fit transition-transform duration-300"
            style={{ transform: order ? "rotate(180deg)" : "rotate(0deg)" }}
            onClick={() => onClickOrder()}
          >
            <SortAsc className="text-white" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
