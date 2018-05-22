var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
  
} katzDeliLine ('Ada', 'Grace', 'Kent');
function nowServing(katzDeli) {
  if (katzDeli.length === 0){
    return 'There is nobody waiting to be served!'
  }else{ 
    return 'Currently serving ' + katzDeli.shift() + '.';
}
}