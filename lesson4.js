const personalProfile={
    firstName:"Deniz",
    lastName:"Aliyeva",
    age:20,
    favouriteLanguage:"JavaScript",
    contactInfo:{
        email:"aliyevadeniz@gmail.com",
        phone:"342342342"
    }
}

//different printing methods:

console.log(personalProfile)
console.log(personalProfile.firstName+ ' ' +personalProfile.lastName)
console.log(personalProfile.age)
console.log(personalProfile["favouriteLanguage"])
console.log(personalProfile["contactInfo"])
console.log(personalProfile["contactInfo"]["email"])
console.log(personalProfile["contactInfo"].phone)

//adding 'occupation' property to the personalProfile object 
personalProfile.occupation="Developer"
console.log(personalProfile)

// Adding a new property using bracket notation
personalProfile["contactInfo"]["address"]="Baku"
console.log(personalProfile)

// another method for adding
const university_key="university"
const university_value="BHOS"
personalProfile[university_key]=university_value
console.log(personalProfile)

//changing a property
personalProfile.age=21
console.log(personalProfile)

//deleting a property
delete personalProfile.favouriteLanguage
console.log(personalProfile)

