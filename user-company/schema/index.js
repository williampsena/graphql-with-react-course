import { GraphQLSchema } from 'graphql'
import UserType from './user'
import CompanyType from './company'
import RootQuery from './root'
import mutation from './mutation'

export default new GraphQLSchema({
    mutation,
    query: RootQuery
})