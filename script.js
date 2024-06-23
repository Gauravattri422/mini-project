const display=document.getElementById('display');

function cleardisplay(){
    display.value='';
}
function num(value)
{
    display.value+=value;
}

function todelete()
{
    display.value=display.value.substring(0,display.value.length-1);
}
 function result()
    {
        display.value=eval(display.value)||'';
   
    }
 


