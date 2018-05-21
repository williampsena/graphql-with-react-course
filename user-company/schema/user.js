import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql'
import axios from 'axios'
import config from '../config'
import CompanyType from './company'

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        company: {
            type: CompanyType,
            async resolve(parentValue, args) {
                const res = await axios.get(`${config.remoteApiUrl}/companies/${parentValue.companyId}`)
                return res.data
            }
        }
    })
})

export default UserType