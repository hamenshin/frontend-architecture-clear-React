import { CharacterFavoriteService } from "@/entities/character/service/CharacterFavoriteService";
import { LocalStorage } from "@/entities/character/storage/LocalStorage";
import { createFavoritesHook } from "@/entities/character/store/useFavorites";

export const setupDeps = () => {
  const characterFavoriteService = new CharacterFavoriteService(new LocalStorage());

  const useFavoriteStore = createFavoritesHook(characterFavoriteService);
  return { useFavoriteStore };
};
