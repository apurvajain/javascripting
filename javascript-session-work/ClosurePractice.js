const timer=(()=>{
    count=0;
    return ()=>{
        console.log(count++);
    }

})();

timer();
timer();
timer();