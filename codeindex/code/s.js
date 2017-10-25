function checkNum(e, pnumber)
{    
  if (!/^\d+$/.test(pnumber) && e.value.length < 1 )
    {
        e.value = /^\d+/.exec(e.value);                
    }
        else if( e.value.length >= 1 ){
                if(!/^\d+$/.test(pnumber)){
                e.value = /^\d+/.exec(e.value);        
                }
                else{                
                var nameID = e.name;                
                
                switch (nameID){
                case 'col1':
        document.credit.col2.focus();
        break
        case 'col2':
        document.credit.col3.focus();
        break
        case 'col3':
        document.credit.col4.focus();
        break 
        case 'col4':
        document.credit.col5.focus();
        break 
        case 'col5':
        document.credit.col6.focus();
        break 
                 }
                }
        }
    return false;
}