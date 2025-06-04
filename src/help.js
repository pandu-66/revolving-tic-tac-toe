
// const checkWin = (row, col, board)=>{
//         let rowCheck = true;
//         for(let i=0;i<board.length-1;i++){
//             if(board[row][i]!==board[row][i+1]){
//                 rowCheck = false;
//                 break;
//             }
//         }
//         if(rowCheck) return true;

//         let colCheck = true;
//         for(let i=0;i<board.length-1;i++){
//             if(board[i][col]!==board[i+1][col]){
//                 colCheck = false;
//                 break;
//             }
//         }
//         if(colCheck) return true;

//         if(row===col){
//             let diaCheck = true;
//             for(let i=0;i<board.length-1;i++){
//                 if(board[i][i]!==board[i+1][i+1]){
//                     diaCheck = false;
//                     break;
//                 }
//             }
//             if(diaCheck) return true;
//         }

//         if (row + col === board.length-1) {
//             let antiDiagWin = true;
//             for (let i = 0; i < board.length-1; i++) {
//                 if (board[i][board.length-1 - i] !== board[i + 1][board.length-1 - (i + 1)]) antiDiagWin = false;
//             }
//             if (antiDiagWin) return true;
//         }

//         return false;
//     }

//     export default checkWin;

const checkWin = (row, col, board)=>{
    let target = board[row][col];
    const directions = [
        [0,1],
        [1,0],
        [1,1],
        [1,-1]
    ]
    let size = board.length;
    for(const [dx, dy] of directions){
        let count=1;

        let r = row-dx;
        let c = col-dy;
        while(count<3 && r>=0 && c>=0 && r<size && c<size && board[r][c]==target){
            count++;
            r-=dx;
            c-=dy;
        }

        r = row+dx;
        c = col+dy;

        while(count<3 && r>=0 && c>=0 && r<size && c<size && board[r][c]==target){
            count++;
            r+=dx;
            c+=dy;
        }

        if(count==3){
            return true;
        }
    }

    return false;
}

export default checkWin;