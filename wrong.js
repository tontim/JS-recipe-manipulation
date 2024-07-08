//Wait for DOM
document.addEventListener("DOMContentLoaded", function () {
    //Fix logo color
    const logoText = document.querySelector('.logo-text');
    logoText.style.color = '#000000';
    //Fix header
    const header = document.querySelector('header');
    header.style.display = 'flex';
    header.style.justifyContent = 'flex-start';
    //Fix header border
    header.style.borderBottom = '1px solid #d3d3d3';
    //Fix recipe name
    const recipeName = document.getElementById('recipe-name');
    recipeName.innerText = 'Frozen Cheesecake';
    //Fix clock icon
    const clockIcon = document.querySelector('.time-container span');
    clockIcon.classList.add('material-icons');
    clockIcon.innerText = 'av_timer';
    //Fix baking time 
    const time = document.querySelector('.time-container .time');
    time.innerText = '60+ min';
    //Fix src image
    const image = document.querySelector('.image-container img');
    image.src = 'assets/frozen-cheesecake-slice.jpg';
    //Fix ingredients container color
    const ingredientsContainer = document.querySelector('.ingredients-container');
    ingredientsContainer.style.backgroundColor = '#FFFFFF';
    //Fix ingredients list 
    const ingredientsListBottom = document.querySelector('.ingredients-list-bottom');
    ingredientsListBottom.innerHTML = `
    <li>15st digistivekex</li>
    <li>Lite smör</li>`;
    //Fix third ingredient
    const ingredientsListPaste = document.querySelectorAll('.ingredients-list-paste li');
    ingredientsListPaste[2].innerText = '3tsk vaniljsocker';
    //Fix missing ingredient
    const missingIngredient = document.createElement('li');
    missingIngredient.innerText = '400g naturell philadelphiaost';
    ingredientsListPaste[ingredientsListPaste.length - 1].after(missingIngredient);
    //Fix instructions shadow
    const instructionsShadow = document.querySelector('.instructions');
    instructionsShadow.classList.remove('shadow');
    //Fix instructions list
    const instructionsList = document.querySelectorAll('.instructions-list li');
    instructionsList[1].innerText = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
    instructionsList[8].innerText = 'Ställ in i frysen över natten.';
    //Log changes
    console.log("Logo fixed:", logoText.style.color);
    console.log("Header alignment fixed:", header.style.display, header.style.justifyContent, header.style.alignItems);
    console.log("Header border color fixed:", header.style.borderBottom);
    console.log("Recipe name fix: ", recipeName.innerText);
    console.log("Clock icon fixed: ", clockIcon.className);
    console.log("Baking time changed:", time.innerText);
    console.log("Image src changed:", image.src);
    console.log("Ingredients background color fixed:", ingredientsContainer.style.backgroundColor);
    console.log("Ingredients list for bottom fixed:", ingredientsListBottom.innerHTML);
    console.log("Third ingredient changed:", ingredientsListPaste[2].innerText);
    console.log("Ingredients fixed:", missingIngredient.innerText);
    console.log("Instructions shadow applied:", instructionsShadow.classList.contains('shadow'));
    console.log("Instructions list fixed:", instructionsList[1].innerText, instructionsList[8].innerText);
});