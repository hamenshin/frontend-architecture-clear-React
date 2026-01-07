import type { CharactersDTO } from "@/shared/dto/characterDTO";
import type { Character } from "./types";

export class CharacterModel {
  constructor() {}

  static CharacterDtoToUiMapper = (characterDto: CharactersDTO): Character[] => {
    return characterDto.results.map((character) => ({
      id: character.id,
      name: character.name,
      image: character.image,
      species: character.species,
      status: character.status,
      isFavorite: false,
    }));
  };
}
