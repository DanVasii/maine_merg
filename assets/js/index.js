var btn = null,menu = null;

document.addEventListener('DOMContentLoaded', function(event) {
    btn = document.querySelector(".sandwich");
    menu = document.querySelector(".left_menu");

     Array.from(document.querySelectorAll(".counter_container")).forEach((elem)=>{
        let input = elem.querySelector("input");

        elem.querySelector(".fa-minus").onclick = ()=>
        {
            decrement(input);
        }
        elem.querySelector(".fa-plus").onclick = ()=>
        {
            increment(input);
        }
     }) 
     
  })


  function decrement(input)
  {
      try{
      let value = parseInt(input.value);
      if ((value) == 0) return ;
      
      input.value = value - 1;
      }
      catch(e)
      {
          input.value = 0;
      }
  }

  function increment(input)
  {
      try{
        let value = parseInt(input.value);

        input.value = value+1;
      }
      catch(e)
      {
          input.value = 0;
      }
        
  }

  
function open_menu()
{
    if (btn == null || menu == null)
    return;
    
    menu.style.left = "0px";
    //transform to X

    btn.querySelector("span:nth-child(1)").classList.add("hidden");
    btn.querySelector("span:nth-child(2)").classList.add("first_bar");
    btn.querySelector("span:nth-child(3)").classList.add("second_bar");


    btn.onclick = function()
    {
        close_menu();
    }
    
}

function close_menu()
{
    if (btn == null || menu == null)
    return;

    let width = menu.clientWidth;

    menu.style.left = `-${width}px`; 

    //change to sandwich
    btn.querySelector("span:nth-child(1)").classList.remove("hidden");
    btn.querySelector("span:nth-child(2)").classList.remove("first_bar");
    btn.querySelector("span:nth-child(3)").classList.remove("second_bar");


    btn.onclick = function()
    {
        open_menu();
    }


}