"use client";

import { IconButton, Popover } from "@mui/material";
import { Filter } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getTags } from "../hooks/Tag";

interface Props {
  setTags: (tags: Tag[]) => void;
  tags: Tag[];
  setSelTags: (tags: Tag[]) => void;
  selTags: Tag[];
}

export default function FilterButton({
  setTags,
  tags,
  setSelTags,
  selTags,
}: Props) {
  const [open, setOpen] = useState(false);
  const anchorEl = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    async function fetchTags() {
      const res = await getTags();
      setTags(res);
    }
    fetchTags();
  }, []);

  async function onSubmit() {
    setOpen(false);
  }

  return (
    <>
      <IconButton
        ref={anchorEl}
        onClick={() => setOpen(true)}
        className="h-fit"
      >
        <Filter className="text-white" />
      </IconButton>
      <Popover
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="p-4 bg-white rounded-xl shadow-md">
          <div className="grid grid-cols-3 gap-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => {
                  if (selTags.some((t) => t.id === tag.id)) {
                    setSelTags(selTags.filter((t) => t.id !== tag.id));
                  } else {
                    setSelTags([...selTags, tag]);
                  }
                }}
                className={`
                  px-4 py-2 rounded-full w-fit
                  ${
                    selTags.some((t) => t.id === tag.id)
                      ? "bg-secundaria-forte text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                  transition-colors
                `}
              >
                {tag.nome}
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => onSubmit()}
              className="bg-secundaria-forte text-white px-4 py-2 rounded-full transition-colors hover:bg-secundaria-fraca"
            >
              Fechar
            </button>
          </div>
        </div>
      </Popover>
    </>
  );
}
