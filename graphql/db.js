// data-source
export const people = [
    {
        id: "0",
        name: "jin",
        age: 26,
        gender: "female"
    },
    {
        id: "1",
        name: "jjinii",
        age: 26,
        gender: "male"
    },
    {
        id: "2",
        name: "dev",
        age: 26,
        gender: "male"
    },
    {
        id: "3",
        name: "haha",
        age: 26,
        gender: "female"
    },
    {
        id: "4",
        name: "hello",
        age: 26,
        gender: "female"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}