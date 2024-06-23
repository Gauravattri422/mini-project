function fetchjoke()
{
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response=>response.json())
    .then(data=>{
        let joke;
        if(data.type=='single')
            {
                joke=data.joke;
            }
            else{
                joke=$(data.setup)<br>$(data.delivery);
            }

            document.getElementById('jokecontainer').innerHTML=joke;
    })
}