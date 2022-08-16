class Queue { 
    constructor() {
        this.storage = [];
        this.count = 0;
    }
        
   
        add = function (value) {
            this.storage.push(value)
        }  
       remove = function () {
            this.storage.shift()
        } 
        length = function () {
          return this.storage.length
        }
}

module.exports = Queue