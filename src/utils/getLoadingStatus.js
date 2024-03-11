export const getLoadingStatus = (data) => {
    return Array.isArray(data) || Object.keys(data).length > 0 
 }