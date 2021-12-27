function noX(str){
  
  if(str.length == 0)
    return str;
  
  if(str.charAt(0) =='x')
    return noX(str.substring(1));
  
  return str.charAt(0)+ noX(str.substring(1));
}