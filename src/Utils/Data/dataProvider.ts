import { GetPosts } from "../../Interfaces/Interfaces";



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
            const apiUri = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts/dzuleta';
            headersConfig.append('pragma', 'no-cache');
            headersConfig.append('cache-control', 'no-store');
            const request = await fetch(apiUri, {
                method: "GET",
                headers: headersConfig,
            });


            const result: GetPosts = await request.json();

            const success = (data: any) => typeof callback !== "undefined" && callback(data);

            success(result);

            return result

        } catch (error) {
            typeof errorhandler !== "undefined" ? errorhandler(error) : console.log(error);
        };

    },

    deleteBlog: async (
        id: string,
        headers_?: Headers,
        callback?: (...args: any[]) => void,
        errorhandler?: (...args: any[]) => void,
    ) => {
        try {

            const headersConfig = headers_ !== undefined ? headers_ : new Headers(dataProvider.headers);
            const apiUri = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts/dzuleta/' + id;
            headersConfig.append('pragma', 'no-cache');
            headersConfig.append('cache-control', 'no-store');
            const request = await fetch(apiUri, {
                method: "DELETE",
                headers: headersConfig,
            });


            const result = await request.json();

            const success = (data: any) => typeof callback !== "undefined" && callback(data);

            success(result);

            return result

        } catch (error) {
            typeof errorhandler !== "undefined" ? errorhandler(error) : console.log(error);
        };



    },

    editBlog: async (
        id: string,
        text: string,
        tittle: string,
        headers_?: Headers,
        callback?: (...args: any[]) => void,
        errorhandler?: (...args: any[]) => void,
    ) => {
        try {
            const body = {
                text,
                tittle,
            }
            const headersConfig = headers_ !== undefined ? headers_ : new Headers(dataProvider.headers);
            const apiUri = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts/dzuleta/' + id;
            headersConfig.append('pragma', 'no-cache');
            headersConfig.append('cache-control', 'no-store');
            const request = await fetch(apiUri, {
                method: "PUT",
                headers: headersConfig,
                body: JSON.stringify(body)
            });


            const result = await request.json();

            const success = (data: any) => typeof callback !== "undefined" && callback(data);

            success(result);

            return result

        } catch (error) {
            typeof errorhandler !== "undefined" ? errorhandler(error) : console.log(error);
        };



    },

    createBlog: async (
        text: string,
        tittle: string,
        headers_?: Headers,
        callback?: (...args: any[]) => void,
        errorhandler?: (...args: any[]) => void,
    ) => {
        try {
            const body = {
                text,
                tittle,
            }
            const headersConfig = headers_ !== undefined ? headers_ : new Headers(dataProvider.headers);
            const apiUri = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts/dzuleta/';
            headersConfig.append('pragma', 'no-cache');
            headersConfig.append('cache-control', 'no-store');
            const request = await fetch(apiUri, {
                method: "POST",
                headers: headersConfig,
                body: JSON.stringify(body)
            });


            const result = await request.json();

            const success = (data: any) => typeof callback !== "undefined" && callback(data);

            success(result);

            return result

        } catch (error) {
            typeof errorhandler !== "undefined" ? errorhandler(error) : console.log(error);
        };



    },



}


export default dataProvider;