import { Button } from "../kit/button";
import { Input } from "../kit/input";
import HeaderSearchPopover from "./HeaderSearchPopover";
import { useState } from "react";
import { rqClient } from "@/shared/api/instance";

function HeaderSearchUi({ children }) {
  return <div className="flex gap-2 w-full ml-5 py-1">{children}</div>;
}

export default function HeaderSearch() {
  const [inputValue, setInputValue] = useState<string>("");
  const {
    data: searchResult,
    refetch,
    isError,
    isFetching,
    isSuccess,
  } = rqClient.useQuery(
    "get",
    "/search.json",
    {
      params: { query: { q: inputValue, limit: 5 } },
    },
    { enabled: false }
  );

  return (
    <HeaderSearchUi>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Название книги"
      />
      {isFetching || searchResult ? (
        <HeaderSearchPopover
          searchResult={searchResult}
          isError={isError}
          isFetching={isFetching}
          isSuccess={isSuccess}
        />
      ) : null}
      <Button
        type="submit"
        onClick={() => {
          refetch();
        }}
      >
        Поиск
      </Button>
    </HeaderSearchUi>
  );
}
