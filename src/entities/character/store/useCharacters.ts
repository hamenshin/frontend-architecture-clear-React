import type { Character } from "@/entities/character/model/types";
import { CharacterService } from "@/entities/character/service/CharacterService";
import { useCallback, useEffect, useMemo, useState } from "react";

export const createCharacterHook = (characterService: CharacterService) => {
  return function useCharacter() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Character[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchByName = useCallback(async (name: string) => {
      try {
        setLoading(true);
        setError(null);
        const data = await characterService.getCharacter(name);

        setItems(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setItems([]);
        }
      } finally {
        setLoading(false);
      }
    }, []);

    useEffect(() => {
      const t = setTimeout(() => {
        fetchByName(query);
      }, 300);
      return () => clearTimeout(t);
    }, [query]);

    return useMemo(
      () => ({
        query,
        setQuery,
        loading,
        items,
        error,
      }),
      [query, setQuery, loading, items, error],
    );
  };
};
