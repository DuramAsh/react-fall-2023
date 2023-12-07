export const parseToken = (token) => {
  if (!token) return null;
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  // Format date
  const formattedDate = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  }).format(date);

  // Format time
  const formattedTime = new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date);

  return `${formattedDate} ${formattedTime}`;
}