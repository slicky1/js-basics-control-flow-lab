function scuberGreetingForFeet(underFeet){ 
  if (underFeet <= 400){
return `This one is on me!`;
  }
  else if (underFeet > 2000 && underFeet <= 2500){
    return `I will gladly take your thirty bucks.`
 
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(NYC,){
   return NYC ? `Ok, sounds good.`
   : `Ok, sounds good.`;
}
function ternaryCheckCity(Pittsburgh,){
  return Pittsburgh ? `No go.`
  : `No go.`;

}
 
  function switchOnCharmFromTip (give) {
    switch (give) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }

