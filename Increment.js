const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute('data-target'); // target value hai 
    const startingNumber = Number(counter.innerHTML);  // yaha startingNumber = 0 
    const incr = targetCount / 100;  
    if(startingNumber < targetCount){
        counter.innerHTML = `${Math.round(startingNumber + incr)}`;
        setTimeout(updateCounter,5);
    }else{

    }

  }

  updateCounter();
})