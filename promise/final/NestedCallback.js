setTimeout(() => {
    console.log("1 second passed");
    setTimeout(() => {
      console.log("2 second passed");
      setTimeout(() => {
        console.log("3 second passed");
        setTimeout(() => {
          console.log("4 second passed");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);