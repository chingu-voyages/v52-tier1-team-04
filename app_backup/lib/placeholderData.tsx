// Component './lib/placeholderData.tsx'
// Every JS object is a table in the db


const residents = [
    { id: 0, name: "Kyle Mortimer" },
    { id: 1, name: "Raymond Millwater" },
    { id: 2, name: "Donald Watts" }

]
const invoices = [
    {
        resident_id: residents[0].id,
        amount: 2113,
        status: 'pending',
        date: '2025-03-15',
    },
    {
        resident_id: residents[1].id,
        amount: 48565,
        status: 'pending',
        date: '2025-03-19',
    },
    {
        resident_id: residents[2].id,
        amount: 17,
        status: 'pending',
        date: '2025-01-29',
    },
]