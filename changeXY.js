function changeXY(str){
  if (str.length==0)
  { 
    return str;
  }
  if (str.charAt(0) == 'x') 
  {
    return "y" + changeXY(str.substring(1));
  }
  return str.charAt(0) + changeXY(str.substring(1));
  }
