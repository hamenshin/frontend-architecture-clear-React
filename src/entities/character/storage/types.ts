export type CharacterStorage = {
  getItem<T>(key: string): T | null;
  setItem<T>(key: string, value: T): void;
  clear(): void;
  removeItem(key: string): void;
};
