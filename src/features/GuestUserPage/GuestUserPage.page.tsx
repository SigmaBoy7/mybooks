import { store, type AppState } from "@/shared/store";
import type { IBook } from "@/shared/types";
import { Link } from "react-router";

export default function IntroPage() {
  const selectUserBooks = (state: AppState) => state.userBooks;
  const userBooks = selectUserBooks(store.getState());

  return (
    <>
      Hello <Link to={"/"}>Hellos</Link>
      {userBooks.map((item: IBook) => {
        return <div>{item.title}</div>;
      })}
    </>
  );
}

/* We create Component for react-router dynamic-import its just what react-router required. */
export const Component = IntroPage;
