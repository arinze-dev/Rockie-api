import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Price {
        price: [String!]
    }

    type Trade {
        address: String!
    }

    type coinObj {
        name: String!
        image: String!
        current_price: String!
        market_cap: String!
        market_cap_rank: String!
        price_change_24h: String!
        price_change_percentage_24h: String!
        market_cap_change_percentage_24h: String!
        sparkline_in_7d: Price!
        trade: Trade
    }


    type Query {
        coins: [coinObj!]!
    }
`;
