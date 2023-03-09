function solution(nums) {
    let answer = 0;
    let count = nums.length / 2;
    
    let arr = nums.filter((element, idx) => {
        return nums.indexOf(element) === idx;
    });
    
    if(arr.length >= count){
        answer = count;
    }else{
        answer = arr.length;
    }
    
    return answer;
}