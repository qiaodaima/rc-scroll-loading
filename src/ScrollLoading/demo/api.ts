import { type ResponseType } from 'rc-scroll-loading';

// export const getDataSource = (params: any) => {
//   const requestInit = {
//     method: 'POST',
//     body: JSON.stringify(params),
//   };

//   return fetch('/api/users', requestInit).then((response) => response.json());
// };

export const getDataSource = (params: any) => {
  return new Promise<ResponseType>((resolve) => {
    setTimeout(() => {
      const resutl = {
        current: params.current,
        pageSize: params.pageSize,
        total: 60,
        records: new Array(10).fill('哇塞').map(() => ({
          id: (Math.random() * 100).toFixed(2),
          name: `娃哈哈${(Math.random() * 100).toFixed(2)}`,
        })),
      };

      console.log('--params--', params);
      console.log('--response--', resutl);

      resolve(resutl);
    }, 2000);
  });
};
