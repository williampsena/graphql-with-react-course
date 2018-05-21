import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList
} from 'graphql'
import axios from 'axios'
import config from '../config'
import UserType from './user'

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        users: {
            type: new GraphQLList(UserType),
            async resolve(parentValue, args) {
                const res = await axios.get(`${config.remoteApiUrl}/companies/${parentValue.id}/users`)
                return res.data
            }
        }
    })
})

export default CompanyType