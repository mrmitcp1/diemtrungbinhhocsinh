let students =  [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
let maleCount = 0
let feMaleCount = 0
let malePoin = 0
let femalePoin = 0
for (let i = 0; i < students.length; i++) {
    if (students[i].gender==='male'){
        malePoin +=students[i].poin
        maleCount++
    }else if (students[i].gender==='female'){
        femalePoin+=students[i].poin
        feMaleCount++
    }
}
let averageMalePoin = malePoin/maleCount
let averageFemalePoin = femalePoin/feMaleCount
console.log(`diem trung binh hoc sinh nam la: ${averageMalePoin}`)
console.log(`diem trung binh hoc sinh nu la: ${averageFemalePoin}`)