

// export const formatDateTime = (timestamp: string, locale: string = 'en'): string => {
//   const now = new Date();
//   let date = now;
//   if (timestamp) date = new Date(timestamp);

//   const day = date.getDate();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();

//   const DD = day < 10 ? `0${day}` : `${day}`;
//   const MM = month < 10 ? `0${month}` : `${month}`;
//   const YYYY = `${year}`;

//   return locale === 'hr' ? `${DD}/${MM}/${YYYY}` : `${MM}/${DD}/${YYYY}`;
// };


export const formatDateTime = (timestamp: string, locale: string = 'en'): string => {
  const now = new Date();
  const date = timestamp ? new Date(timestamp) : now;

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
