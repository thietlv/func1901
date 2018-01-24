/*
B1.

*
**
***
****

B2.

   *
  **
 ***
****

B3.

****
***
**
*


B3.

****
 ***
  **
   *

B4.

  * 
 ***
*****
 ***
  *

B6.
    *
   ***
  * * *
 *  *  * 
*********
 *  *  * 
  * * *
   ***
    *
B7.
  *
 ***
*****
*/
function veHinh1(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dk = j <= i;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh2(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dk = j + i >= n + 1;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh3(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dk = j >= i;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh4(n) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const tongBuocChan = (n - 1) / 2;
            const soBuocNgang = Math.abs(j - (n + 1) / 2);
            const soBuocDoc = Math.abs(i - (n + 1) / 2);
            const dk = (soBuocNgang + soBuocDoc === tongBuocChan) || i === (n + 1) / 2 || j === (n + 1) / 2;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh(n, fn) {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            const dk = fn(i, j, n);
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

veHinh(4, (i, j, n) => j <= i);
veHinh(5, (i, j, n) => j + i >= n + 1);
veHinh(9, (i, j, n) => {
    const tongBuocChan = (n - 1) / 2;
    const trungTam = (n + 1) / 2;
    const soBuocNgang = Math.abs(j - trungTam);
    const soBuocDoc = Math.abs(i - trungTam);
    const namTrenTrucDoc = i === trungTam;
    const namTrenTrucNgang =  j === trungTam;
    const namTrenDuongVien = soBuocNgang + soBuocDoc === tongBuocChan;
    const dk = namTrenDuongVien || namTrenTrucDoc || namTrenTrucNgang;
    return dk;
});
