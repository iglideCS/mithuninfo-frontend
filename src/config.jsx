const isProduction = import.meta.env.VITE_API_URL
console.log(isProduction);

export const API_URL = isProduction==='production' ? "https://mithuninfo-backend.koyeb.app" : "http://localhost:8000";

console.log(API_URL);
