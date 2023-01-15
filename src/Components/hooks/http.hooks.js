import { useState, useCallback } from 'react';

export const useHttp = () => {
    const request = async (url, method, body = null, headers = { 'Content-Type': 'application/json' }) => {
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        return data;
    };
    return { request };
};

export default useHttp;
