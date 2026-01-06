import { CharacterList } from "@/entities/character/ui/CharacterList";
import { setupDeps } from "./useDi";

const { useFavoriteStore } = setupDeps();

export function FavoritesPage() {
  const { list, isFavorite, toggleFavorite, clearFavorites } = useFavoriteStore();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Favorites</h2>
        {list.length > 0 && (
          <button
            className="text-sm underline text-muted-foreground"
            onClick={clearFavorites}
            title="Clear all favorites"
          >
            Clear all
          </button>
        )}
      </div>
      <CharacterList items={list} isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />
    </div>
  );
}
