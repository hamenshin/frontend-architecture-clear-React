import type { Character } from "../model/types";
import type { CharacterStorage } from "../storage/types";

export class CharacterFavoriteService {
  constructor(private storage: CharacterStorage) {}

  getFavorite(key: string): Record<number, Character> {
    const result = this.storage.getItem<Record<number, Character>>(key);
    return result || {};
  }

  setFavorite(key: string, value: Record<number, Character>) {
    this.storage.setItem(key, value);
  }

  removeFavorite(key: string) {
    this.storage.removeItem(key);
  }

  clearFavorite() {
    this.storage.clear();
  }
}
