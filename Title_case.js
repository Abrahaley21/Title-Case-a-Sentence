//Title Case a Sentence
let string = 'sHoRt AnD sToUt'

function Titlecase(st){
    let arr=st.toLowerCase().split(' ')
    for (let i=0 ; i<arr.length ; i++){
        arr[i]=arr[i].toUpperCase()+arr[i].slice(1)
    }
    return arr.join(' ')
}
console.log(Titlecase(string))
