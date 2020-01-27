'use strict'
var number = new Vue({
	el: '#number',
	data: {
    	num:'',
    	revNum:''
  },
  methods: {
  	reverseNumber: function (){
  		let n=1
  		let number1 = this.num
  		while ((number1/10)>=1){ //визначення к-сті цифр у числі
  			n++
  			number1 = number1/10
  		}

  		let ten = this.num
  		let currentRev = 0
  		for (var i = 1; i <= n; i++) {     //визначення кожної цифри остачею від ділення
  			currentRev = currentRev + ((ten%10)*Math.pow(10,(n-i)))
  			ten = Math.floor(ten/10) //иведення числа без останньої цифри
  		}
  		this.revNum = currentRev
  	}
  	  
  }

})
