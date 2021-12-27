function allStar(str){
  if(str.length == 0 || str.length == 1)
  {
    return str;
  }
  return str.charAt(0) + "*" + allStar(str.substring(1));

}