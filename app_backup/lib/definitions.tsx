//Component './lib/definitions.tsx'
// Define the types returned from the database

export type Invoice = {
    id: string;
    resident_id: string;
    amount: number;
    date: string;
    // String 'union type': "status" property can only be one of the two strings: 'pending' or 'paid'
    status: 'pending' | 'paid';
};