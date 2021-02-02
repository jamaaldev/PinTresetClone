let auth = '';
let pinimage = document.querySelector('.pinimage');
let search = document.querySelector('form');
let sectionphoto = document.querySelector('#section');
window.onload = () => {
    
    takeme();
    getPhoto();
}
let htmlpost
let saveme = [];
let mytype = 'usa';
let mysearch;

search.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    mytype =  e.target.children[0].value;
    if(mytype.length){
        
        console.log('yes');
        takeme();
        
        return mytype;
    }
})
function takeme(){
    
    saveme.push(mytype);
    mysearch = saveme.pop();
    
    getPhoto(mysearch)
    
}
function getPhoto(myserch){
    let url = `https://api.pexels.com/v1/search?query=${myserch}&per_page=50`;
    fetch(url,{
        method:'GET',
        headers:{
            Authorization: auth,
        }
    }).then((response)=>{
        return response.json();
    }).then((photo) =>{
        showPhoto(photo)
    })
    
}

const showPhoto = (photopin) => {
    // let photer = photopin.photos[0].url;
    sectionphoto.innerHTML = ``;
    
    for(photo of photopin.photos){
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
       
        console.log(photo);
        htmlpost = `<div class="pinboxmodel" style="height:max-content">
    <div class="pinimage" style="background-image: url(${photo.src.large});height:${photo.height}">
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
       <div class="cap">this is capture</div>
       <div class="cap">this is capture</div>
       <div class="cap">this is capture</div>
       <div class="cap">this is capture</div>
       <div class="cap">this is capture</div>
    </div>
   </div>`;
   sectionphoto.innerHTML += htmlpost;
}

}
