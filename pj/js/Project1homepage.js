  let imgcontainer = document.getElementById('imgcontainer') ;
 


  let img = document.querySelectorAll('#imgcontainer img') ;
  


  let leftbtn = document.getElementById('prevbtn') ;


  let rightbtn = document.getElementById('nextbtn') ; 

  let idx = 0 ;

  
  leftbtn.addEventListener('click',function(e){

         idx -- ;
         changeimage() ;
        e.preventDefault() ;

        console.log(idx)

        

  })
  rightbtn.addEventListener('click',function(e){

    idx ++ ;
    changeimage() ;
    e.preventDefault();
    console.log(idx)

})


function changeimage(){

        if(idx > img.length - 1){
            idx = 0 ;
        }else if (idx < 0){
                idx = img.length -1 ;
        }


        imgcontainer.style.transform =`translate(${-idx *99}vw)` ;


}
