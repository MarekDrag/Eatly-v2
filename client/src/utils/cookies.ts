export const getCookie = (name: string) => {
  const cookieValue = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`));

  if (cookieValue) {
    return cookieValue.split('=')[1];
  }

  return null;
};

export const setCookie = (name: string, value: string, expirationMinutes: number) => {
  const date = new Date();
  date.setTime(date.getTime() + expirationMinutes * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;

  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
