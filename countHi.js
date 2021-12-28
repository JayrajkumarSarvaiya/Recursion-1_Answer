function countHi(str){
   if(str.length == 0)
        return 0;
          
    if(str.charAt(0) == 'h' && str.charAt(1) == 'i')
        return 1 + countHi(str.substring(1));
                    
    return countHi(str.substring(1));
  }