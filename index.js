
const ACCESS_TOCKEN = "6q8RMsv-usP9iL_NxWECBmj4A5EN_9zxDiMACTLcZO0"

let findimage = document.getElementById("findimage")
let val
let pagenumber = 1

document.getElementById("btn").addEventListener("click",() =>{
    pagenumber=1
    document.getElementById("allimage").innerHTML=''
    val = findimage.value
    findimage.value = ''
            fetchapi(val)

})

async function fetchapi(val){
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCESS_TOCKEN}&page=${pagenumber}`) 
    let result  = await response.json()
    // if(result.results.length < 1){
    //     document.getElementById("allimage").innerHTML = `<h2>No image found for specific request made</h2>`
    // }
    // else{----------------this error handeling is not working below are the same error handeling tried but failed------
    //     displayimage(result)
    // }
    displayimage(result)
}
    
//     try {
//         let response = await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${ACCESS_TOCKEN}&page=${pagenumber}`);
        
//         if (!response.ok) {
//             throw new Error("API request failed");
//         }

//         let result = await response.json();

//         if (result.total === 0) {
//             document.getElementById("allimage").innerHTML = `<h2>No image found for "${val}"</h2>`;
//         } else {
//             displayimage(result);
//         }

//     } catch (err) {
//         document.getElementById("allimage").innerHTML = `<h2>Something went wrong. Please try again later.</h2>`;
//         console.error("Fetch error:", err);
//     }
// }


    

function displayimage(res){
        res.results.map(data =>{
        
        let div = document.createElement('div')
        div.setAttribute('class','singleimage')
        div.innerHTML = `   <div class="firstdiv">
                <img id="userimage" src= ${data.user.profile_image.large} alt="">
                <p>${data.user.name}</p>
            </div>
            <div class="seconddiv">
                <img id="mainimage" src= ${data.urls.regular} alt="">
                <p> ${data.alt_description}</p>

            </div>`
        document.getElementById('allimage').appendChild(div)
    })
    document.getElementById("loadmorebtn").classList.add("visible")

}
document.getElementById("loadmorebtn").addEventListener('click',()=>{
    pagenumber++
    fetchapi(val)
})





