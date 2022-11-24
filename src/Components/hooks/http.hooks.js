import { useState, useCallback } from 'react';

export const useHttp = () => {
    const request = async (url, method = 'GET') => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };
    return { request };
};

export default useHttp;
