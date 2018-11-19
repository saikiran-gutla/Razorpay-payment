function Calculate() 
{
       var items= document.getElementById('items').value;
       total= 250*items;       
       document.getElementById('sum').innerHTML= "Amount to be Paid :"+total;   
       $.post('index.php', {amount: total});    
}
