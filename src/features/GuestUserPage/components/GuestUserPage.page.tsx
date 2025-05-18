import { Link } from "react-router";

export default function GuestUserPage() {
  return (
    <>
      Hello <Link to={"/"}>Hellos</Link>
    </>
  );
}

/* We create Component for react-router dynamic-import its just what react-router required. */
export const Component = GuestUserPage;
