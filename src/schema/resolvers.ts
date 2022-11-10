import axios from 'axios';
import trade from '../../trade.json';


const url: string = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24";

export const resolvers = {
    Query: {
        coins: async () => {

            try {
               const res = await axios.get(url);
               let response = res.data;

                for (let index = 0; index < response.length; index++) {
                    if (Object.keys(trade)[index] === response[index].name.toLowerCase()) {
                        response[index].trade = Object.values(trade)[index];
                    }
                }
                console.log(response);
                return response;
            } catch(error) {
               console.log(error);
            }
        }
    }
}
