import { Skeleton } from "@/shared/components";
import { useAppDispatch } from "@/shared/store/storeHooks";
import type { IBook, ISearchResultResponse } from "@/shared/types";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router";

export default function HeaderSearchPopover({
  searchResult,
  isFetching,
  isError,
  isSuccess,
}: {
  searchResult?: ISearchResultResponse;
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
}) {
  const dispatch = useAppDispatch();
  const addToUserBooks = (book: IBook): void => {
    dispatch({ type: "user/addBook", payload: book });
  };

  const getPopoverContent = () => {
    if (isFetching) {
      return (
        <div className="space-y-2">
          {[...Array(2)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full rounded-lg bg-gray-800" />
          ))}
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex items-center gap-2 text-red-400">
          <AlertTriangle className="h-4 w-4" />
          <span>Failed to load results</span>
        </div>
      );
    }

    if (isSuccess) {
      if (!searchResult?.docs) return null;

      if (searchResult.docs?.length > 0) {
        return (
          <div className="space-y-2">
            {searchResult.docs.map((item) => (
              <div
                key={item.key}
                className="rounded-lg p-2 transition-colors hover:bg-gray-800"
              >
                <h3 className="truncate text-sm font-medium text-gray-100">
                  {item.title}
                </h3>
                {item.author_name && (
                  <p className="truncate text-xs text-gray-400">
                    {item.author_name.join(", ")}
                  </p>
                )}
                <button onClick={() => addToUserBooks(item)}>
                  Add to list
                </button>
              </div>
            ))}
            <Link
              to={"/search"}
              className="text-right text-blue-400 hover:text-blue-600"
            >
              Show all results
            </Link>
          </div>
        );
      }

      return (
        <div className="text-center text-sm text-gray-400">
          No results found
        </div>
      );
    }

    return null;
  };

  return (
    <div className="absolute z-50 top-14 w-full min-w-[300px] max-w-md overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-lg">
      <div className="p-4">
        <h2 className="mb-2 text-sm font-semibold text-gray-300">
          Search Results
        </h2>
        <div className="space-y-3">{getPopoverContent()}</div>
      </div>
    </div>
  );
}
