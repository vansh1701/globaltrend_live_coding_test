function LCS(str1,str2){
    let m = str1.length;
    let n = str2.length;

const arr = Array.from(Array(m+1),() => Array(n+1).fill(0));

    
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(str1[i-1]===str2[j-1]){
                arr[i][j]=arr[i-1][j-1]+1;
            }else{
                arr[i][j]=Math.max(arr[i-1][j],arr[i][j-1]);
            }
        }
    }
let stt = "";
while(m>0 && n>0){
    if(str1[m-1] === str2[n-1]){
        stt = str1[m-1] + stt;
        m--;
        n--;
    }else if(arr[m-1][n] >= arr[m][n-1]){
        m--;
    }else{
        n--;
    }
}
return stt;
}

const str1="abcde";
const str2="ace";
console.log(LCS(str1,str2));