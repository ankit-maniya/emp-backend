const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type User{
        _id: ID
        first_name: String!
        last_name: String!
        Age: Int!
        dateOfJoining: String!
        title: String!
        department: String!
        employeeType: String!
        currentStatus: String!
    }

    type RootQuery{
        users: [User!]!
        getUserByType(employeeType: String!) : [User!]
        filterEmployee(employeeType: String!, title: String!, department: String!): [User!]
        getSingleEmployee(_id: String!): User!
    }

    type RootMutation{
        createEmployee(first_name: String!, last_name: String!, Age: Int!, dateOfJoining: String!, title: String!, department: String!, employeeType: String!): User!
        updateEmployee(_id: String!, title: String!, department: String!, currentStatus: String!): User!
        deleteEmployee(_id: String!): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`)