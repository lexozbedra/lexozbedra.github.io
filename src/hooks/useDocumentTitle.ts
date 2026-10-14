import { useEffect } from "react";

const base = "Viktoriia Rudnikova";

/** Ставит заголовок вкладки: "About – Viktoriia Rudnikova". Без аргумента – "Viktoriia Rudnikova – Data generalist". */
export function useDocumentTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} – ${base}` : `${base} – Data generalist`;
  }, [page]);
}
