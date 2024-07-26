function q3(w,v,c){
    const n = w.length;
    const dp = Array(n+1).fill(null).map(() => Array(c+1).fill(0));
    for(let i=1;i<=n;i++){
        for(let j=1;j<=c;j++){
            if(w[i-1]<=j){
                dp[i][j] = Math.max(v[i-1]+dp[i-1][j-w[i-1]],dp[i-1][j]);
            }else{
                dp[i][j]=dp[i-1][j];
            }
        }
    }
    return dp[n][c];
}

const w=[1,2,3];
const v=[10,15,40];
const c=6;
const maxvalue = q3(w,v,c);
console.log(maxvalue);