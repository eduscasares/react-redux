// Async Action types availables
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; // Esta va a ser escuchada con Watcher Saga
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; // Esta va a ser despachada con Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; // Esta va a ser despachada con Worker Saga

export const login = (email, password) => {

    return {
        type: API_CALL_REQUEST,
        payload: { // Dentro de payload podemos mandar cualquier tipo de datos (en este caso es la config de Axios)
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password,
                },
                okAction: API_CALL_SUCCESS,
                failAction: API_CALL_FAILURE,
            }
        }
    }

}


/**
 * 
 * @param {string} method 
 * @param {string} url 
 * @param {object} data 
 * @returns a generic way to make HTTP requests and Action dispatcher
 */
export const httpRequest = (method, url, data) => {

    return {
        type: API_CALL_REQUEST,
        payload: { 
            request: {
                method: method,
                url: url,
                data: data,
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE,
        }
    }

}