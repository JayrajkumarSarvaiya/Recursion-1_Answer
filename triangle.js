function triangle(rows){
  if(rows==0)
    return 0;

  else
    return rows + triangle(rows - 1);
}