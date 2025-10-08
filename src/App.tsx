//rafce
import { useEffect, useState } from "react";

import RecipeCard from "./components/RecipeCard";

// 1.type oluştur
type Recipe = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
};

const App = () => {
  // 2. usss
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   // 3. uffs
    useEffect(() => {
      const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`; 
  
      setIsLoading(true);
      setError(null);
  
      fetch(API_URL)
        .then((res) => {
          if (!res.ok) {
              throw new Error(`HTTP Hata: ${res.status}`);
          }
          return res.json();
        })
        .then((json) => {
          if (json.meals && json.meals.length > 0) {
              setRecipes(json.meals as Recipe[]);
          } else {
              setRecipes([]);
          }
        })
        .catch((err) => {
          console.error("API Hatası:", err);
          setError("Tarifler yüklenirken bir sorun oluştu.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
  
  // 3. Render
  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      
      {/* Başlık ve Başlık Kartı */}
      <header className="max-w-7xl mx-auto mb-8 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4">
            <div className="bg-red-500 p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
                </svg>
            </div>
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900">RecipeHub</h1>
                <p className="text-sm text-gray-500">Discover delicious recipes from around the world</p>
            </div>
      
      </header>

      {/* Durum Mesajları */}
      <main className="max-w-7xl mx-auto">
        {isLoading && (
            <p className="text-center text-xl text-gray-600 mt-10">Tarifler yükleniyor...</p>
        )}
        
        {error && (
            <p className="text-center text-xl text-red-500 mt-10">Hata: {error}</p>
        )}
        
        {!isLoading && !error && recipes.length === 0 && (
            <p className="text-center text-xl text-gray-600 mt-10">Aramanıza uygun tarif bulunamadı. Lütfen başka bir terim deneyin.</p>
        )}

        {/* Tarif Listesi (Responsive Grid) */}
        <div className="grid 
            grid-cols-1                /* Mobil (Varsayılan): 1 sütun */
            md:grid-cols-2             /* Tablet (768px+): 2 sütun */
            lg:grid-cols-3             /* Küçük Desktop (1024px+): 3 sütun */
            xl:grid-cols-4             /* Büyük Desktop (1280px+): 4 sütun */
            gap-6">
          
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

