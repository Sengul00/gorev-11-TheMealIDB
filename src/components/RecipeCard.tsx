//rafce
import React from 'react';

// 1.type oluştur
type Recipe = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
};


const COOKING_TIME = "30 min";

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-[1.01] duration-300">
      
      {/* Resim Alanı */}
      <div className="relative h-48 sm:h-56">
        <img
          className="w-full h-full object-cover"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/600x400/FACC15/000000?text=${recipe.strMeal.split(' ').slice(0, 2).join(' ')}`;
          }}
        />
        {/* Kategori Etiketi */}
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {recipe.strCategory}
        </span>
      </div>

      {/* İçerik Alanı */}
      <div className="p-4 flex flex-col justify-between h-auto">
        {/* Başlık */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 truncate" title={recipe.strMeal}>
          {recipe.strMeal}
        </h2>
        
        {/* Alt Bilgiler (Süre ve Ülke/Bölge) */}
        <div className="flex justify-between items-center text-sm text-gray-500 mt-2 border-t pt-3">
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-gray-600">{COOKING_TIME}</span>
          </div>

          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 00.183.794c.328.423.791.674 1.303.674H17.29a1 1 0 001.213-1.474l-7-14z" />
            </svg>
            <span className="font-medium text-gray-600">{recipe.strArea}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;