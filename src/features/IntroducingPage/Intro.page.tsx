import { rqClient } from "@/shared/api/instance";
import { Link } from "react-router";

export default function IntroPage() {
  const { data, isSuccess } = rqClient.useQuery("get", "/search.json", {
    params: { query: { q: "lord" } },
  });

  if (isSuccess) {
    console.log(data);
  }

  return (
    <>
      Hello <Link to={"/"}>Hellos</Link>
    </>
  );
}

/* We create Component for react-router dynamic-import its just what react-router required. */
export const Component = IntroPage;
