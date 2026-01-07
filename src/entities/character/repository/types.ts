import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";
import type { CharactersDTO } from "@/shared/dto/characterDTO";

export type CharacterRepository = {
  getCharacter(config?: RequestConfig): ApiResponse<CharactersDTO>;
};
