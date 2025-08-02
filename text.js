let btn=document.getElementById("btn");

btn.onclick=async function(){
    
    let name=document.getElementById("name").value.toLowerCase();
    let image = document.getElementById("image");
    let imgbox = document.getElementById("imgbox");

    let h2=document.getElementById(`h2`)
let weight1=document.getElementById(`weight`)
let attack1=document.getElementById(`attack`)
let hp1=document.getElementById(`hp`)
let defence1=document.getElementById(`defence`)
let specialattack1=document.getElementById(`special-attack`)
let specialdefence1=document.getElementById(`special-defence`)
let speed1=document.getElementById(`speed`)




    try{
         let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          if (!response.ok) throw new Error("Pokémon not found");

         let data=await response.json();
    
         let img=data.sprites.front_default;
         let naam=data.name;
         let weigh=data.weight;
         let attack=data.stats[1].base_stat;
         let hp=data.stats[0].base_stat
         let defence=data.stats[2].base_stat;
         let specialattack=data.stats[3].base_stat;
         let specialdefence=data.stats[4].base_stat;
         let speed=data.stats[5].base_stat;
         
        
        image.src=img;
        image.style.display="block";
        imgbox.style.display="block";
       
        h2.textContent=naam.toUpperCase();
        weight1.textContent=`Weight:${weigh}`;
        attack1.textContent=`Attack:${attack}`;
        hp1.textContent=`Hp:${hp}`;
        defence1.textContent=`Defence:${defence}`;
        specialattack1.textContent=`Special-Attack:${specialattack}`;
        specialdefence1.textContent=`Special-Defence:${specialdefence}`;
        speed1.textContent=`Speed:${speed}`;
        

    }



catch(error){

h2.textContent=error;
}
}
