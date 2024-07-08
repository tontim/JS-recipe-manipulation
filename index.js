document.addEventListener("DOMContentLoaded", function () {
    //Get name
    const recipeName = document.getElementById('recipe-name').innerText;
    console.log("Recipe name: ", recipeName);
    //Get recipe html tag
    const recipeNameTag = document.getElementById('recipe-name').tagName;
    console.log("Recipe html tag: ", recipeNameTag);
    // Font size paragraph
    const descriptionParagraph = document.querySelector('.description');
    const descriptionFontSize = window.getComputedStyle(descriptionParagraph).fontSize;
    console.log("Description font size: ", descriptionFontSize);
    //Image alt
    const image = document.querySelector('.image-container img');
    const imageAlt = image.getAttribute('alt');
    console.log("Image alt: ", imageAlt);
    //Dimensions & URL
    const imageURL = image.getAttribute('src');
    image.onload = () => {
        const imageDimensions = {
            url: imageURL,
            height: image.naturalHeight,
            width: image.naturalWidth
        };
        console.log("Image & URL: ", imageDimensions);
    };
    //Ingredients count
    const pasteIngredients = document.querySelectorAll('.ingredients-list-paste li');
    const pasteIngredientsCount = pasteIngredients.length;
    console.log("Number of ingredients: ", pasteIngredientsCount);
    //Array of instructions
    const instructions = document.querySelectorAll('.instructions-list li');
    const instructionsArray = Array.from(instructions).map((instruction, index) => ({
        order: index + 1,
        text: instruction.innerText
    }));
    console.log("Instructions: ", instructionsArray);
});