import { CharacterModel } from "../model/CharacterModel";
import type { CharacterRepository } from "../repository/types";

export class CharacterService {
  constructor(private repository: CharacterRepository) {}

  async getCharacter(name: string) {
    const { data } = await this.repository.getCharacter({ options: { params: { name } } });
    return CharacterModel.CharacterDtoToUiMapper(data);
  }
}
