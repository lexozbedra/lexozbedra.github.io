import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");

  return (
    <div className="mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-20">
      <h1 className="font-display m-0 text-6xl font-extrabold tracking-tight sm:text-8xl" style={{ fontStretch: "80%" }}>
        404
      </h1>
      <p className="mt-6 max-w-[34ch] text-[1.45rem] leading-snug">
        There's no page at this address. It may have moved, or the link has a typo.
      </p>
      <p className="mt-6">
        <Link className="prose-link" to="/">
          Back to the home page
        </Link>
      </p>
    </div>
  );
}
