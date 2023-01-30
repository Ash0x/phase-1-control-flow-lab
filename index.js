function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet > 2500) return 'No can do.'
  else if (2500 >= feet && feet >= 2000 ) return 'I will gladly take your thirty bucks.'
  else if (2000 > feet && feet > 400) return 'That will be twenty bucks.'
  else if (feet <= 400) return 'This one is on me!'
}

function ternaryCheckCity(city){
  // Write your code here!
  const response = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return response

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case ('generous'): return 'Thank you so much.'
    case ('not as generous'): return 'Thank you.'
    default: return 'Bye.'
  }
}