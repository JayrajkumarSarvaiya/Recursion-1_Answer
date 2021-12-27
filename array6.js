function array6(nums, i){
  if(nums.length < i)
  {
    return false;
  }
  if(nums[i] == 6)
  {
    return true;
  }
  else
    return array6(nums, i+1);
}