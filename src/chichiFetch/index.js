const responseToJson = (response) => response.json();

export const globalConfig = {
  refetchOnWindowsFocus: false,
};

export default function chichiFetch(route) {
  const domain = process.env.REACT_APP_API_DOMAIN || "http://localhost:3004";

  return () => fetch(`${domain}${route}`).then(responseToJson);
}
