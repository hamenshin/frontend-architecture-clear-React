import { CharacterApi } from "@/entities/character/repository/CharacterApi";
import { CharacterFavoriteService } from "@/entities/character/service/CharacterFavoriteService";
import { CharacterService } from "@/entities/character/service/CharacterService";
import { LocalStorage } from "@/entities/character/storage/LocalStorage";
import { createCharacterHook } from "@/entities/character/store/useCharacters";
import { createFavoritesHook } from "@/entities/character/store/useFavorites";

export const setupDeps = () => {
  const characterService = new CharacterService(new CharacterApi());
  const characterFavoriteService = new CharacterFavoriteService(new LocalStorage());

  const useCharacterStore = createCharacterHook(characterService);
  const useFavoriteStore = createFavoritesHook(characterFavoriteService);

  return { useCharacterStore, useFavoriteStore };
};
