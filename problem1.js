const names=['ahona', 'sabbir','rupali','mohona','tanvir']
const  reversed=[]
 for(let i =0; i<names.length;i++){
    console.log(names[i]);
    reversed.unshift(names[i])

 }
 console.log( reversed)
  // OUTPUT ['tanvir', 'mohona', rupali', 'sabbir', 'ahona']
