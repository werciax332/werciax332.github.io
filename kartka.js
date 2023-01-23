import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("tlo","kartka-swiateczna-werciax.png")
loadSprite("obrazek","balwanek2.png")
loadSound("muzyka","aniol_pasterzom_mowi.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0),
])

const balwanek = add([
    sprite("obrazek"),
    pos(450,160),
    rotate(0)
])

let count = 0

onUpdate(()=>{

    //balwanek.moveTo(balwanek.pos.x-1,balwanek.pos.y)

    if(balwanek.pos.x < 600)
    {
       
        if (balwanek.pos.x > 100) balwanek.pos.x -=1

        else count++

        if (count > 100) destroy(balwanek)

    
    }

    onKeyPress("space", ()=>{
        play("muzyka", {"volume": 0.8}) 
    })
    

    //debug.log(balwanek.pos.x) 
}



)

//for (let i = 0; i < 10000; i++) balwanek.angle += 1