'use strict'
var subString = new Vue({
  el: '#subString',
  data: {
    string:'',
    subStr:''
  },
  methods: {
    longSubStr: function () {
      let arrLet = this.string.split('')
      const count = arrLet.length
      let allArr = []
      
        for (var win = count; win > 0; win--) {
          for (var i = 0; i <= count-win; i++) {
             let oneComb = this.string.substr(i,win)
            if (doesntContainRepeatedSymbols(oneComb)) {
              allArr.push(oneComb)
            }
          }
        } 
        function maxComb(a, b) {
          if (a.length === b.length) {
            return 0
          } else if (a.length > b.length) {
            return -1
          }
            return 1
        }
        function doesntContainRepeatedSymbols(oneComb){
          for (var i = 0; i < oneComb.length; i++) {
            for (var j = i+1; j < oneComb.length; j++) {
              if (oneComb[i]==oneComb[j]) {
                return false

              } 

            }
          } return true
        }
        this.subStr = allArr[0]
        } 
     }
 })
  