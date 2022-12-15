import { GetCharacter } from "../../Interfaces/Interfaces";



const dataProvider = {

    headers: {
        "Content-Type": "application/json",
    },

    getData: async (
        
        headers_?: Headers,
        callback?: (...args: any[]) => void,
        errorhandler?: (...args: any[]) => void,
    ) => {
        try {
            
            const headersConfig = headers_ !== undefined ? headers_ : new Headers(dataProvider.headers);
            const apiUri = 'https://rickandmortyapi.com/api/character' ;
            headersConfig.append('pragma', 'no-cache');
            headersConfig.append('cache-control', 'no-store');
            const request = await fetch(apiUri, {
                method: "GET",
                headers: headersConfig,
            });

         
            const result:GetCharacter = await request.json();

            const success = (data: any) => typeof callback !== "undefined" && callback(data);

            success(result);

            return result

        } catch (error) {
            typeof errorhandler !== "undefined" ? errorhandler(error) : console.log(error);
        };



    },

    

}


export default dataProvider;