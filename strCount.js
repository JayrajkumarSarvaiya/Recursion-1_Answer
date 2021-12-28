function strCount(str, sub){
  let strlen = str.length;
  let sublen = sub.length;
  
  if(strlen==0)
  {
    return 0;
  }
  if(str.substr(0,sublen) == sub)
  {
    return 1 + strCount(str.substr(sublen),sub); 
  }
  else
  {
    return strCount(str.substr(1),sub);
  }
}