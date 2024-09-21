function themeFunction(){
    const checkBox = document.getElementById("checkBox");
    const body = document.querySelector("body")
    const headerOne = document.querySelector("h1")
    const listItems = document.querySelectorAll("li")
    const headerTwo = document.querySelectorAll("h2")
    const headerFour = document.querySelectorAll("h4")
   const darkMode = document.getElementById("dark-mode")

    if (checkBox.checked == true){
       body.style.background = "linear-gradient(hsl(232,19%,15%),hsl(230,17%,14%))";
       headerOne.style.color = "white";
       darkMode.style.color ="hsl(228, 12%, 44%)";
       listItems.forEach(item => {
        item.style.backgroundColor = "hsl(228, 28%, 20%)"
       });
       headerTwo.forEach(item =>{
        item.style.color = "white";
       })
       headerFour.forEach(item =>{
        item.style.color = "white";
       })
       
    } else {
        body.style.background = "linear-gradient(hsl(255,100%,97%), hsl(0,0%,100%))";
        headerOne.style.color = "black";
        listItems.forEach(item => {
            item.style.backgroundColor = "hsl(227, 47%, 96%)"
           });
        headerTwo.forEach(item =>{
            item.style.color = "black";
           })
           headerFour.forEach(item =>{
            item.style.color = "black";
           })
    }
}