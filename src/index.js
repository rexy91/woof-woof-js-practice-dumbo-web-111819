const show_dogs_div = document.querySelector('#dog-bar')
const show_dog_info = document.querySelector('#dog-info')
const pups_url = 'http://localhost:3000/pups'



// dog info div
const dog_info = document.querySelector('#dog-info')

    // arrow function params name need to match return name for implicit.
    // Get fetch will also get pup's id. 
    fetch(pups_url)
    .then(res => res.json())
    .then((jsonObj) => {

        jsonObj.forEach((one_pup)=>{

            add_pup_to_DOM(one_pup)
        })

    } )

// Add to dom 

function add_pup_to_DOM(one_pup){
 
    // this is inside for each, so this is one pup being iterated
    const dog_names = document.createElement('span')
    dog_names.innerText = one_pup.name
    show_dogs_div.append(dog_names)


    const img_tag  = document.createElement('img')
        img_tag.src = one_pup.image
        img_tag.alt = 'Cool Dog'
      

    const h2tag = document.createElement('h2')
        h2tag.innerText = one_pup.name 

    const good_dog_button = document.createElement('button')

        if (one_pup.isGoodDog === true ){
            good_dog_button.innerText = 'Good Dog!'}

        else{
            good_dog_button.innerText = 'Bad Dog!'
        }

     good_dog_button.addEventListener('click', (e) => {

    

            if (one_pup.isGoodDog === true){
               
                    // ONE parentheses for FETCH!!!!

                    fetch(`http://localhost:3000/pups/${one_pup.id}`,{
                        method: 'PATCH',
                        headers:{
                            "Content-Type": 'application/json',
                            'Accept': 'application/json' 
                        },
                        body: JSON.stringify({
                            isGoodDog: false 
                        }
                        )})
                        .then(res => res.json())
                        .then(dog_object => {
                            good_dog_button.innerText = 'Bad Dog!'
                            console.log(dog_object)
                        })

                            
            }

            else{
                    // e.target.innerText = 'Good Dog!'
            }
            
        })

    // event listener for each span

    dog_names.addEventListener('click', (e) => {

        show_dog_info.append(img_tag, h2tag, good_dog_button)
    })

    // Change button value 

    
    
}



        




