function calculateSpeed(){
   const speed = parseInt(prompt('Enter Speed'));
   if (speed <= 70) {
    alert("Ok");
  } else if (speed > 70 ) {
    const excess = speed-70
    const delimit = Math.floor(excess/5)
    if (delimit >12) {
        alert('License suspended')
    } 
    else {
        alert(delimit)
    }
  }
}