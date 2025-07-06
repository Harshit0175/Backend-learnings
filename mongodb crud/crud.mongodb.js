use('crudDB')
console.log(db);

db.createCollection('users')
// db.users.insertOne({
//     name: "harshit joshi",
//     age: 20,
//     email: "harshit@example.com"

// })
// db.users.insertMany(
// [
//   {
//     name: "Rahul Sharma",
//     email: "rahul.sharma@example.com",
//     age: 25,
//     city: "Delhi",
//     isVerified: true,
//     createdAt: new Date()
//   },
//   {
//     name: "Priya Mehta",
//     email: "priya.mehta@example.com",
//     age: 28,
//     city: "Mumbai",
//     isVerified: false,
//     createdAt: new Date()
//   },
//   {
//     name: "Aman Gupta",
//     email: "aman.gupta@example.com",
//     age: 20,
//     city: "Bangalore",
//     isVerified: true,
//     createdAt: new Date()
//   },
//   {
//     name: "Simran Kaur",
//     email: "simran.kaur@example.com",
//     age: 30,
//     city: "Chandigarh",
//     isVerified: false,
//     createdAt: new Date()
//   },
//   {
//     name: "Neha Verma",
//     email: "neha.verma@example.com",
//     age: 27,
//     city: "Pune",
//     isVerified: true,
//     createdAt: new Date()
//   }
// ]
// )
// let a=db.users.find({age:20})
// console.log(a.toArray());
// db.users.find({age:20}).forEach((user) => {
//     console.log(user);
// })
// let a=db.users.find({age:20})
// console.log(a.count());

// let b =db.users.findOne({age:20})
// console.log(b);
// db.users.updateOne({age:20},{$set:{age:21}})
// db.users.updateMany({age:25},{$set:{age:21}})

// db.users.deleteOne({age:20})
// db.users.deleteMany({})
// db.users.insertMany( [
//    { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
//    { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
//    { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
//    { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
//    { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }
// ] )
// db.users.find({qty:{ $eq:20}})
// console.log(a);

// db.users.insertMany( [
//    { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
//    { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
//    { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
//    { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
//    { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }
// ] )
db.users.find({qty:{ $gt:20}})

