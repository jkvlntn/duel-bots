class Command{
  constructor(content){
    let cArr = content.split(" ");
    if(cArr.length == 1){
      this.action = "";
      this.args = "";
    }
    else if(cArr.length == 2){
      this.action = cArr[1];
      this.args = "";
    }
    else{
      this.action = cArr[1];
      cArr.splice(0,2);
      this.args = cArr;
    }
  }
}
module.exports = Command;
