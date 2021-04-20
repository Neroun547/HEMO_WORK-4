//Matrix.... 

function matrix (R, C, r0, c0) {
    let res = [];
	let shift = 1;
	let coloumn_limit = c0 + shift;
	let row_limit = r0 + shift;
	let i = r0;
    let j = c0;
    
	while (res.length < R * C) {
		if (i >= 0 && j >= 0 && i < R && j < C) {
			res.push([i, j]);
		}
		if (i == row_limit && coloumn_limit == j) {
			if(shift < 0){
                shift--;
            }else {
                shift ++;
            }
			shift *= -1;
			coloumn_limit = coloumn_limit + shift;
			row_limit = row_limit + shift;
		}
		if (j < coloumn_limit) {
			j++;
		} else if (i < row_limit) {
			i++;
		} else if (j > coloumn_limit) {
			j--;
		} else if (i > row_limit) {
			i--;
		}
	}
	return res;
};

console.log(matrix(5, 6, 4, 4));