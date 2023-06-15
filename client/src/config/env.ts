const env = import.meta.env;

const { VITE_API_URL, VITE_API_KEY } = env;

export const API_URL: string = VITE_API_URL;
export const API_KEY: string = VITE_API_KEY;
