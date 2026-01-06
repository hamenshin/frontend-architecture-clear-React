import { type RequestConfig, type ApiResponse, httpClient } from "@/shared/api/HttpClient";
import type { CharactersDTO } from "@/shared/dto/characterDTO";
import type { CharacterRepository } from "./types";

export class CharacterApi implements CharacterRepository {
  getCharacter(config?: RequestConfig): ApiResponse<CharactersDTO> {
    return httpClient.get<CharactersDTO>("character", config?.options);
  }
}
