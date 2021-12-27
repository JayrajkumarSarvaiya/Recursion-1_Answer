function sumDigits1(n){
  if(n<10)
  {
    return n;
  }
  else
    return (n%10)+ sumDigits1(Math.floor(n/10));
}