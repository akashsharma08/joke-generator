const btn = document.querySelector("#btn");
const joke = document.querySelector("#joke");

const apiKey = "TCjLgcaChAiq/7D6iYFkAw==sbv440wNBz7Kd6AW";

const options = {
    method : 'GET' ,
    headers : {
        "X-Api-Key" : apiKey ,
    }
};
   
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

btn.addEventListener( "click" ,async ()=>{

    try {

    joke.textContent ="Loading. . . ";
    btn.disabled = true;
    btn.textContent = "Please wait..."

    const response = await fetch( apiURL , options);

    btn.disabled = false;
    btn.textContent = "Another one please!"

    const data = await response.json();
    joke.textContent =data[0].joke;
    
} catch (error) {
        joke.textContent = "Please check your Internet connection!";        
        joke.style.color = "red";
        btn.textContent = "Try again";
    }
})

