import type { Character } from "@/entities/character/model/types";
import { useCallback, useEffect, useState } from "react";
import { CharacterFavoriteService } from "../service/CharacterFavoriteService";

const LS_KEY = "favorites_characters_v1";

export const createFavoritesHook = (characterFavoriteService: CharacterFavoriteService) => {
  return function useFavorites() {
    const [favorites, setFavorites] = useState<Record<number, Character>>(() => {
      const saved = characterFavoriteService.getFavorite(LS_KEY);

      if (saved) {
        return saved;
      }

      return {};
    });

    useEffect(() => {
      const saved = characterFavoriteService.getFavorite(LS_KEY);
      if (saved) {
        setFavorites(saved);
      }
    }, []);

    useEffect(() => {
      characterFavoriteService.setFavorite(LS_KEY, favorites);
    }, [favorites]);

    const isFavorite = useCallback((id: number) => Boolean(favorites[id]), [favorites]);

    const toggleFavorite = useCallback((char: Character) => {
      setFavorites((prev) => {
        const next = { ...prev };
        if (next[char.id]) {
          delete next[char.id];
        } else {
          next[char.id] = char;
        }
        return next;
      });
    }, []);

    const clearFavorites = useCallback(() => setFavorites({}), []);

    const list = Object.values(favorites);

    return { favorites, list, isFavorite, toggleFavorite, clearFavorites };
  };
};
