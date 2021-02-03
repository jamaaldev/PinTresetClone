let auth = '';
let pinimage = document.querySelector('.pinimage');
let search = document.querySelector('form');
let sectionphoto = document.querySelector('#section');
window.onload = () => {
    
    takeme();
    getPhoto(myDefult);
}
let htmlpost
let saveme = [];
let myDefult = "saudi";
let mysearch;

search.addEventListener('submit', (e)=>{
    e.preventDefault();
    myDefult =  e.target.children[0].value;
    if(myDefult.length){
        
        console.log('yes');
        takeme();
         
    }
})
function takeme(){
    
    saveme.push(myDefult);
    mysearch = saveme.pop();
    
    getPhoto(mysearch)
    
}
function getPhoto(myserch){
    let url = `https://api.unsplash.com/search/photos?client_id=${auth}&per_page=30&query=${myserch}`;
    fetch(url,{
        method:'GET',
    
    }).then((response)=>{
        return response.json();
    }).then((photo) =>{
        console.log(photo);
        showPhoto(photo)
    })
    
}

const showPhoto = (photopin) => {
    // let photer = photopin.photos[0].url;
    sectionphoto.innerHTML = ``;
    console.log(photopin);

    

    for(photo of photopin.results){
        // switch (photo.height){
        //     case 5676 > 800:
        //     case 1376:
        //        photo.height = '350px';
        //         break;
        // }
        if(photo.height > 3000){
         photo.height = '350px';
        } else if(photo.height < 2000){
            photo.height = '235px';
        } else if(photo.height < 3500){
            photo.height = '235px';
        } 
       
        htmlpost = `<div class="pinboxmodel" style="height:max-content">
    <div class="pinimage" style="background-image: url(${photo.urls.regular});height:${photo.height}">
       <div class="pininside">  
          <div class="pininfo">
             <div class="pinsave"><span>Save</span></div>
          </div>
          <div class="pinshare">
             <i class="fas fa-download"></i>
             <i class="fas fas fa-ellipsis-h"></i>
          </div>
       </div>
    </div>
    <div class="captures">
    <div class="cap">${photo.alt_description}</div>
    <div class="infopro">
        <div class="profile" style="background-image: url(${photo.user.profile_image.medium})"></div>
        <div class="proname">${photo.user.first_name} ${photo.user.last_name}</div>
    </div>
    </div>
   </div>`;
   sectionphoto.innerHTML += htmlpost;
}

}
