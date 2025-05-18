import { rqClient } from "@/shared/api/instance";
import { Button, Input } from "@/shared/components";
import { useState } from "react";
import HeaderSearchPopover from "./HeaderSearchPopover";

const SEARCH_LIMIT = 2;
const EMPTY_STRING = "";

const HeaderSearchUi = function HeaderSearchUi({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative flex gap-2 w-full ml-5 py-1">{children}</div>;
};

export default function HeaderSearch() {
  const [inputValue, setInputValue] = useState<string>(EMPTY_STRING);

  const {
    data: searchResult,
    isError,
    isFetching,
    isSuccess,
    refetch,
  } = rqClient.useQuery(
    "get",
    "/search.json",
    {
      params: { query: { q: inputValue, limit: SEARCH_LIMIT } },
    },
    { enabled: false },
  );

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (inputValue.trim()) {
      refetch();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <HeaderSearchUi>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Название книги"
        aria-label="Поиск книг"
      />

      {(searchResult || isFetching) && (
        <HeaderSearchPopover
          searchResult={searchResult}
          isError={isError}
          isFetching={isFetching}
          isSuccess={isSuccess}
        />
      )}

      <Button type="submit" disabled={isFetching} onClick={handleSearch}>
        {isFetching ? "Поиск..." : "Поиск"}
      </Button>
    </HeaderSearchUi>
  );
}
