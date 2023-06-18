var $container = document.querySelectorAll('.container li');


for( var i = 0; i < $container.length; i++){
    $container[i].style.backgroundColor = '#E25147';
    
    $container[i].addEventListener('mouseover',function(e){
        
        e.target.style.backgroundColor = '#08a2de';
        
    })
    $container[i].addEventListener('mouseout',function(e){
        
        e.target.style.backgroundColor = '#E25147';
        
    })
}




