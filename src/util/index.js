export const createUrlQuery = (options) => {
    const queryParams = [];

    Object.keys(options).forEach(key => {
        queryParams.push(`${key}=${options[key]}`);
    })
    
    return queryParams.length !== 0 ? `?${queryParams.join('&')}`: '';
}