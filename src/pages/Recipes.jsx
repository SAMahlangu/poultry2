import React, { useRef } from 'react';
import './Recipes.css';
import umleqwaImg from '../assets/umleqwa.png';
import sosatiesImg from '../assets/sosaties.png';
import stewImg from '../assets/stew.png';
import curryImg from '../assets/curry.png';
import papStewImg from '../assets/papa_stew.png';

function ChickenRecipes() {
    const recipeRefs = Array.from({ length: 5 }, () => useRef(null));

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const recipes = [
        {
            title: 'uMleqwa (Hardbody Chicken)',
            img: umleqwaImg,
            ingredients: [
                '1 whole Cornish hen, cut into pieces',
                '2 cups water',
                '1 medium brown onion, diced',
                '1 chicken stock cube, dissolved in 2 cups hot water',
                '2 T medium curry powder',
                'Salt, to taste.'
            ],
            instructions: [
                'Place the Cornish hen in a large pot and add water. Simmer for 1 hour.',
                'Add onion, stock, curry powder, and salt. Cook for another hour until tender.',
                'Serve with samp, pap, or uJeqe.'
            ]
        },
        {
            title: 'Traditional Sosaties',
            img: sosatiesImg,
            ingredients: [
                '2 lbs lamb or chicken, cut into cubes',
                '1 large onion, sliced',
                '1/2 cup dried apricots',
                '1/2 cup dried prunes',
                '1/4 cup vegetable oil',
                '1/4 cup brown sugar',
                '1/4 cup white vinegar',
                '2 tbsp curry powder',
                '1 tbsp turmeric',
                '2 tbsp apricot jam',
                '4 cloves garlic, minced.'
            ],
            instructions: [
                'Mix oil, sugar, vinegar, spices, and garlic to create a marinade.',
                'Marinate meat and dried fruit for 4 hours.',
                'Thread onto skewers and grill for 15-20 minutes, turning occasionally.',
                'Serve with rice or salad.'
            ]
        },
        {
            title: 'South African Chicken Stew',
            img: stewImg,
            ingredients: [
                '6 Chicken drumsticks or thighs',
                '1 large onion, chopped',
                '3 medium potatoes, halved',
                '2 carrots, sliced',
                '250ml chicken stock',
                '1 tsp minced garlic',
                '1/2 tsp minced ginger',
                '1 tsp turmeric',
                '1 tomato, quartered',
                '1 tbsp tomato paste',
                '2 bay leaves',
                'Salt and pepper',
                '1 tsp dried oregano',
                'Olive oil.'
            ],
            instructions: [
                'Brown chicken with salt and pepper, then set aside.',
                'Sauté onions and bay leaves, then add garlic and ginger. Deglaze with stock.',
                'Mix in turmeric, tomato paste, and vegetables.',
                'Simmer for 1.5-2 hours until tender.',
                'Serve with bread or rice.'
            ]
        },
        {
            title: 'Cape Malay Chicken Curry',
            img: curryImg,
            ingredients: [
                '2 onions, thinly sliced',
                '1 tbsp grated fresh ginger',
                '1 tbsp minced garlic',
                '2 medium potatoes, diced',
                '2-3 lbs chicken pieces',
                '1 tsp cumin',
                '1 tsp chili powder',
                '1 tomato, diced',
                '1 tsp ground coriander',
                '1 tsp turmeric',
                '2 tsp masala',
                '1-2 cups chicken stock.'
            ],
            instructions: [
                'Cook onions until golden brown.',
                'Add tomatoes, garlic, ginger, and spices. Stir well.',
                'Add chicken and potatoes, then pour in stock.',
                'Simmer for 45-60 minutes until chicken is tender.',
                'Serve hot with rice.'
            ]
        },
        {
            title: 'Pap and Chicken Stew',
            img: papStewImg,
            ingredients: [
                '6 chicken pieces (drumsticks and thighs)',
                '2 large tomatoes',
                '1 medium onion',
                '3 tbsp olive oil',
                '1 tsp dried oregano',
                '1 tsp dried coriander',
                '2 bay leaves',
                '500ml water',
                '1 chicken stock cube',
                'Salt to taste.'
            ],
            instructions: [
                'Clean and prepare chicken.',
                'Sauté onions in olive oil until translucent.',
                'Add tomatoes, then the chicken.',
                'Dissolve stock cube in water and pour over chicken.',
                'Cook for 30 minutes, then add herbs and cook for another 10 minutes.',
                'Serve with pap or vegetables.'
            ]
        }
    ];

    return (
        <div className="recipe-container">
            <h1 className="recipe-title">South African Chicken Recipes</h1>
            
            <ol className="recipe-list">
                {recipes.map((recipe, index) => (
                    <li key={index} onClick={() => scrollToSection(recipeRefs[index])} style={{ cursor: 'pointer' }}>
                        {recipe.title}
                    </li>
                ))}
            </ol>

            {recipes.map((recipe, index) => (
                <div key={index} ref={recipeRefs[index]} className="recipe-section">
                    <h2>{recipe.title}</h2>
                    <img src={recipe.img} alt={recipe.title} className="recipe-image" />
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <ul>
                        {recipe.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>
                        ))}
                    </ul>
                </div>
            ))}
            
            <button className="scroll-up-button" onClick={scrollToTop}>
                Scroll to Top
            </button>
        </div>
    );
}

export default ChickenRecipes;
