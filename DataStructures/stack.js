var Stack = function() {

    this.storage={}
    this.count = 0


    this.push= function(value){
      this.storage[this.count] = value;
      this.count ++
    }
    this.pop = function(){
        this.count--
        var result = this.storage[this.count]
        this.storage[this.count] == null
        return result
    }
    this.length = function(){
        length = this.count
        return length + 1
    }
    
   
}

module.exports = Stack