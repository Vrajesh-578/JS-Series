// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach ((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2008},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1987, edition: 2007},
    {title: 'Book Three', genre: 'History', publish: 1990, edition: 2006},
    {title: 'Book Four', genre: 'Fiction', publish: 1995, edition: 2005},
    {title: 'Book Five', genre: 'Science', publish: 1999, edition: 2004},
    {title: 'Book Six', genre: 'Fiction', publish: 2001, edition: 2008},
    {title: 'Book Seven', genre: 'History', publish: 2005, edition: 2014},
    {title: 'Book Eight', genre: 'Non-Fiction', publish: 2006, edition: 2015},
    {title: 'Book Nine', genre: 'Science', publish: 2007, edition: 2017},
    {title: 'Book Ten', genre: 'History', publish: 2008, edition: 2020},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter ( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);