import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/type-defs';
import { resolvers } from './schema/resolvers';

//trade

// console.log(trade);

//initialize apollo server 
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }: { url: string }) => {
    console.log(`server is listening at: ${url }`);
});