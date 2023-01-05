module.exports = function reverse (n) {
    if (n < 0){
        n=n*(-1);
    }
    St = n.toString();
    let newSt = '';
    for (let i = St.length - 1; i>=0; i--) {
        newSt += St[i];
    }
    return newSt;

    /*if (st[0] == '-') {
        st = st.substring(1,(st.length-1));
    } else {
        
    }*/

  
}
