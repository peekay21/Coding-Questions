var fib = function(n) {
    if(n == 0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    let t, a = 0, b = 1;
    for(let i=2;i<=n;i++)
    {
        t = b;
        b = a + b;
        a = t;
    }
    return b;
};
