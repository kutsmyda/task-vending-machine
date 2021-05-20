
// let currentDate = new Date();
// let currentMonth;
//
// if ((currentDate.getUTCMonth()+1).toString().length < 2) {
//     currentMonth = `0${(currentDate.getMonth() + 1)}`;
// } else {
//     currentMonth = `${currentDate.getMonth() + 1}`;
// }
// export const currentDay = `${currentDate.getFullYear()}-${currentMonth}-${currentDate.getDate()}`;



function CurrentDate() {
  this.currentDate = new Date()
    this.getAllDataDate = function (){
        let currentMonth;
        if ((this.currentDate.getUTCMonth()+1).toString().length < 2) {
            currentMonth = `0${(this.currentDate.getMonth() + 1)}`;
        } else {
            currentMonth = `${this.currentDate.getMonth() + 1}`;
        }
      return`${this.currentDate.getFullYear()}-${currentMonth}-${this.currentDate.getDate()}`
    }

    this.currentDay = function (){
        return this.currentDate.getDate()
    }

    this.currentMonth = function (){
        let currentMonth;
        if ((this.currentDate.getUTCMonth()+1).toString().length < 2) {
            currentMonth = `0${(this.currentDate.getMonth() + 1)}`;
        } else {
            currentMonth = `${this.currentDate.getMonth() + 1}`;
        }
        return currentMonth
    }

    this.currentGetFullYear = function () {
     return  this.currentDate.getFullYear()
    }


}


export const currentDate = new CurrentDate()