import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} from 'graphql'
import axios from 'axios'
import config from '../config'
import UserType from './user'

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                age: {
                    type: GraphQLInt
                },
                companyId: {
                    type: GraphQLString
                }
            },
            async resolve(parentValue, {
                firstName,
                age,
                companyId
            }) {
                const res = await axios.post(`${config.remoteApiUrl}/users`, {
                    firstName,
                    age,
                    companyId
                })
                return res.data
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            async resolve(parentValue, {
                id
            }) {
                const res = await axios.delete(`${config.remoteApiUrl}/users/${id}`)
                return res.data
            }
        }
    }
})

export default mutation