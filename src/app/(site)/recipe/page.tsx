'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RecipePage() {
  const [currentScale, setCurrentScale] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());

  const scaleRecipe = (scale: number) => {
    setCurrentScale(scale);
  };

  const toggleIngredient = (index: number) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedIngredients(newChecked);
  };

  const formatAmount = (amount: number, scale: number): string => {
    const scaled = amount * scale;
    
    if (scaled < 1) {
      if (scaled === 0.5) return '1/2';
      if (Math.abs(scaled - 0.33) < 0.01) return '1/3';
      if (scaled === 0.25) return '1/4';
      return scaled.toFixed(2);
    }
    
    return scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(1);
  };

  interface Ingredient {
    amount?: number;
    text: string;
  }

  const salmonIngredients: Ingredient[] = [
    { amount: 4, text: 'salmon fillets (6 oz each)' },
    { amount: 2, text: 'tbsp olive oil' },
    { text: 'Salt and pepper to taste' }
  ];

  const glazeIngredients: Ingredient[] = [
    { amount: 1/3, text: 'cup honey' },
    { amount: 4, text: 'cloves garlic, minced' },
    { amount: 3, text: 'tbsp soy sauce' },
    { amount: 2, text: 'tbsp butter' },
    { amount: 1, text: 'tbsp lemon juice' },
    { amount: 1, text: 'tsp fresh ginger, grated' }
  ];

  const garnishIngredients: Ingredient[] = [
    { text: 'Fresh parsley, chopped' },
    { text: 'Sesame seeds' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-orange-600">
              <i className="fas fa-utensils"></i>
              Cookbook
            </Link>

            <button className="lg:hidden text-gray-700">
              <i className="fas fa-bars text-xl"></i>
            </button>

            <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md mx-8">
              <i className="fas fa-search text-gray-400"></i>
              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Search recipes, ingredients, or chefs..."
              />
            </div>

            <ul className="hidden lg:flex items-center gap-6 text-gray-700">
              <li><a href="#" className="hover:text-orange-600 transition">Browse</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Categories</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Popular</a></li>
            </ul>

            <div className="hidden lg:block ml-6">
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                  <i className="fas fa-user"></i> Login
                  <i className="fas fa-caret-down"></i>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                    <i className="fas fa-sign-in-alt"></i> Sign In
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                    <i className="fas fa-user-plus"></i> Register
                  </a>
                  <div className="border-t border-gray-200"></div>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-orange-600">
                    <i className="fas fa-plus"></i> Create Recipe
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Recipe Header */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Honey Garlic Glazed Salmon
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl">
            Perfectly flaky salmon with a sweet and savory glaze that&apos;s ready in
            just 20 minutes. This restaurant-quality dish will become your go-to
            weeknight dinner.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://media.istockphoto.com/id/1166149111/vector/chef-in-a-cooking-hat-vector-outline-icon-food-concept-for-graphic-design-logo-web-site.jpg?s=612x612&w=0&k=20&c=ars2r_Y6s5OSSLHymV6MAvhxokUDqxSaxDK36ibhjgk="
              alt="Chef Sarah"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">Chef Sarah Martinez</div>
              <div className="text-sm text-gray-600">Published March 15, 2024</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Recipe Content */}
          <div className="lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=400&fit=crop"
              alt="Honey Garlic Glazed Salmon"
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-xl shadow-xl mb-8"
            />

            {/* Recipe Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-orange-600 text-3xl mb-2">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900">10 min</div>
                <div className="text-sm text-gray-600">Prep Time</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-orange-600 text-3xl mb-2">
                  <i className="fas fa-fire"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900">15 min</div>
                <div className="text-sm text-gray-600">Cook Time</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-orange-600 text-3xl mb-2">
                  <i className="fas fa-users"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900">4</div>
                <div className="text-sm text-gray-600">Servings</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-orange-600 text-3xl mb-2">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900">Easy</div>
                <div className="text-sm text-gray-600">Difficulty</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Seafood', 'Gluten-Free', 'High-Protein', 'Quick & Easy', 'Date Night'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Ingredients */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i className="fas fa-list-ul text-orange-600"></i> Ingredients
            </h2>

            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <label className="font-semibold text-gray-700">Scale Recipe:</label>
                <div className="flex gap-2">
                  {[0.5, 1, 2, 3].map((scale) => (
                    <button
                      key={scale}
                      onClick={() => scaleRecipe(scale)}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        currentScale === scale
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {scale === 0.5 ? '½x' : `${scale}x`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For the Salmon:</h4>
                  <div className="space-y-2">
                    {salmonIngredients.map((ingredient, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={checkedIngredients.has(index)}
                          onChange={() => toggleIngredient(index)}
                          className="mt-1 w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                        />
                        <span className={checkedIngredients.has(index) ? 'line-through text-gray-400' : 'text-gray-700'}>
                          {ingredient.amount && <span className="font-medium">{formatAmount(ingredient.amount, currentScale)} </span>}
                          {ingredient.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For the Honey Garlic Glaze:</h4>
                  <div className="space-y-2">
                    {glazeIngredients.map((ingredient, index) => (
                      <div key={index + 100} className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={checkedIngredients.has(index + 100)}
                          onChange={() => toggleIngredient(index + 100)}
                          className="mt-1 w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                        />
                        <span className={checkedIngredients.has(index + 100) ? 'line-through text-gray-400' : 'text-gray-700'}>
                          {ingredient.amount && <span className="font-medium">{formatAmount(ingredient.amount, currentScale)} </span>}
                          {ingredient.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For Garnish:</h4>
                  <div className="space-y-2">
                    {garnishIngredients.map((ingredient, index) => (
                      <div key={index + 200} className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={checkedIngredients.has(index + 200)}
                          onChange={() => toggleIngredient(index + 200)}
                          className="mt-1 w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                        />
                        <span className={checkedIngredients.has(index + 200) ? 'line-through text-gray-400' : 'text-gray-700'}>
                          {ingredient.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i className="fas fa-tasks text-orange-600"></i> Instructions
            </h2>

            <div className="space-y-6 mb-8">
              {[
                {
                  title: 'Prep the salmon:',
                  text: 'Pat salmon fillets dry with paper towels and season both sides generously with salt and pepper. Let sit at room temperature for 5 minutes while preparing the glaze.'
                },
                {
                  title: 'Make the glaze:',
                  text: 'In a small bowl, whisk together honey, minced garlic, soy sauce, lemon juice, and grated ginger. Set aside.'
                },
                {
                  title: 'Sear the salmon:',
                  text: 'Heat olive oil in a large oven-safe skillet over medium-high heat. Place salmon fillets skin-side up and sear for 4-5 minutes until golden brown. Don\'t move them during this time.'
                },
                {
                  title: 'Flip and glaze:',
                  text: 'Carefully flip salmon fillets and cook for 2 minutes. Pour the honey garlic mixture over the salmon and add butter to the pan.'
                },
                {
                  title: 'Finish cooking:',
                  text: 'Continue cooking for 3-4 minutes, spooning the glaze over the salmon frequently, until fish flakes easily with a fork and internal temperature reaches 145°F.'
                },
                {
                  title: 'Serve:',
                  text: 'Transfer salmon to serving plates, spoon remaining glaze over top, and garnish with fresh parsley and sesame seeds. Serve immediately with your favorite sides.'
                }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-gray-700">
                    <strong className="text-gray-900">{step.title}</strong> {step.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chef's Notes */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8 border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fas fa-lightbulb text-orange-600"></i> Chef&apos;s Tips & Notes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Skin-on or skinless:</strong> Both work great! Skin-on helps prevent sticking and adds extra flavor.
                </li>
                <li>
                  <strong>Don&apos;t overcook:</strong> Salmon continues cooking after removing from heat. Slightly underdone is better than overdone.
                </li>
                <li>
                  <strong>Make-ahead:</strong> Glaze can be prepared up to 3 days in advance and stored in the refrigerator.
                </li>
                <li>
                  <strong>Substitutions:</strong> Maple syrup can replace honey for a different flavor profile.
                </li>
                <li>
                  <strong>Storage:</strong> Leftovers keep for 3 days in the fridge. Reheat gently to avoid drying out.
                </li>
              </ul>
            </div>

            {/* Reviews Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i className="fas fa-comments text-orange-600"></i> Reviews & Comments
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      M
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                      <div className="text-orange-500">★★★★★</div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-700">
                  &quot;This recipe is absolutely perfect! The glaze is incredible and
                  the salmon came out so tender. My family loved it and asked me to
                  make it again next week. Definitely a keeper!&quot;
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      J
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">James Wilson</div>
                      <div className="text-orange-500">★★★★★</div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <p className="text-gray-700">
                  &quot;Made this for date night and it was restaurant quality! The
                  timing was spot on and the instructions were so clear. Used maple
                  syrup instead of honey and it was delicious.&quot;
                </p>
              </div>
            </div>

            {/* Related Recipes */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i className="fas fa-heart text-orange-600"></i> You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Lemon Herb Chicken',
                  img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&h=120&fit=crop',
                  meta: '25 min • Easy • ★★★★★'
                },
                {
                  title: 'Garlic Butter Shrimp',
                  img: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?w=200&h=120&fit=crop',
                  meta: '15 min • Easy • ★★★★☆'
                },
                {
                  title: 'Teriyaki Salmon Bowl',
                  img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=120&fit=crop',
                  meta: '30 min • Medium • ★★★★★'
                }
              ].map((recipe, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                  <Image
                    src={recipe.img}
                    alt={recipe.title}
                    width={200}
                    height={120}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <div className="font-semibold text-gray-900 mb-1">{recipe.title}</div>
                    <div className="text-sm text-gray-600">{recipe.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Recipe Actions */}
              <div className="bg-white rounded-lg p-6 shadow-sm space-y-3">
                <button className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium flex items-center justify-center gap-2">
                  <i className="fas fa-heart"></i> Save Recipe
                </button>
                <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium flex items-center justify-center gap-2">
                  <i className="fas fa-share"></i> Share
                </button>
                <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium flex items-center justify-center gap-2">
                  <i className="fas fa-print"></i> Print
                </button>
                <button className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium flex items-center justify-center gap-2">
                  <i className="fas fa-shopping-cart"></i> Add to List
                </button>
              </div>

              {/* Rating */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-orange-500 text-2xl mb-2">★★★★★</div>
                <div className="text-gray-700 mb-4">4.9 out of 5 (127 reviews)</div>
                <button className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium flex items-center justify-center gap-2">
                  <i className="fas fa-camera"></i> Rate This Recipe
                </button>
              </div>

              {/* Nutrition Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="fas fa-chart-pie text-orange-600"></i> Nutrition Per Serving
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '385', label: 'Calories' },
                    { value: '32g', label: 'Protein' },
                    { value: '18g', label: 'Fat' },
                    { value: '15g', label: 'Carbs' }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
