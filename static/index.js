function hide()
      {
          let btn = document.getElementById('btn'); // now in most of the browset we do not required to declare the variable as we have global variable 
                                                    // that will point to the id 
          let para = document.getElementById('para');// but good practise is to declare
          if(para.style.display!='none')
          { 
              para.style.display='none';
           }
           else{
               para.style.display='block';
           }
      }
