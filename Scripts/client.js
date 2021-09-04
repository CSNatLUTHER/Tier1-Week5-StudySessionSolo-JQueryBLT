$( document).ready( onReady );

function onReady(){
    $('#checkBLTButton').on ('click', buildBLT );
}
function buildBLT (ingredients){
    ingredients = [];
    let ingredientsDisplay = [];
    let realSandwich = false;
    if( document.getElementById('topBread').checked === true){
        ingredients.push('bread');
        ingredientsDisplay.push('Top Bread');
    }
    if( document.getElementById('bacon').checked === true){
        ingredients.push('bacon')
        ingredientsDisplay.push('Bacon');
    }
    if( document.getElementById('avacado').checked === true){
        ingredients.push('avacado')
        ingredientsDisplay.push('Avacado');
    }
    if( document.getElementById('lettuce').checked === true){
        ingredients.push('lettuce')
        ingredientsDisplay.push('Lettuce');
    }
    if( document.getElementById('onion').checked === true){
        ingredients.push('onion')
        ingredientsDisplay.push('Onion');
    }
    if( document.getElementById('tomatoes').checked === true){
        ingredients.push('tomatoes')
        ingredientsDisplay.push('Tomatoes');
    }
    if( document.getElementById('bottomBread').checked === true){
        ingredients.push('bread')
        ingredientsDisplay.push('Bottom Bread');
    }
    if (ingredients[0] === 'bread' && ingredients[ingredients.length-1] === 'bread' && ingredients.includes('bacon') && ingredients.includes('lettuce') && ingredients.includes('tomatoes')){
       realSandwich = true 
    } //  end if
    console.log(ingredientsDisplay);
    let el = $('#sandwichResults')
    if(realSandwich === true){
        $('#sandwichResults').empty();
        el.append("<p id='result0'> YOUR SANDWICH INCLUDES:</p>" + ingredientsDisplay.join(', '));
        el.append('<p id="result1"> YOU MADE AN AWESOME BLT SANDWICH!</p>');
    }
    else{
        $('#sandwichResults').empty();
        el.append("<p id='result2'> YOUR SANDWICH INCLUDES:</p>" + ingredientsDisplay.join( ', '));
        el.append("<p id='result3'> YOUR BLT SANDWICH NEEDS HELP. TRY AGAIN!</p> <br><span style='background-color: #FFFF00'>BLT sandwiches need at least two pieces of bread, bacon, lettuce and tomatoes.</span>");
    }
    return realSandwich
}; // end buildBLT function
