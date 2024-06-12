console.log(this,'123')
const e = () => {
  console.log(this.c,'c')
   console.log(this.a,'a')
   console.log(this.b,'b')
}

e()

let a = 'no_up'
const b = 'no_up'
var c ='up'