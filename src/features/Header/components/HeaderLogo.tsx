import { NavLink } from "react-router";

export default function HeaderLogo() {
  return (
    <div className="bg-foreground w-fit rounded-md p-1">
      <NavLink to={"/"}>
        <h1 className="text-3xl text-black">MyBooks</h1>
      </NavLink>
    </div>
  );
}
