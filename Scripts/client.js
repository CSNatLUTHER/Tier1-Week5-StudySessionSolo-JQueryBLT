$( document).ready( onReady );

function onReady(){
    console.log("JQ Ready");
}

function buildBLT (ingredients){
    console.log('in buildBLT');
    let realSandwich = false;
    if (ingredients[0] === 'bread' && ingredients[ingredients.length-1] === 'bread' && ingredients.includes('bacon' && 'lettuce' && 'tomatoes')){
       realSandwich = true 
    } //  end if
    console.log(realSandwich)
    return realSandwich
}; // end buildBLT function

buildBLT(['bread', 'lettuce', 'bacon', 'tomatoes', 'bread']) // expect true
buildBLT(['bread', 'lettuce', 'bacon', 'tomatoes']) // expect false
buildBLT(['lettuce', 'bacon', 'tomatoes', 'bread']) // expect false
buildBLT(['bread', 'lettuce', 'bacon', 'tomatoes', 'celery', 'kiwi', 'kimchee','bread']) // expect true
