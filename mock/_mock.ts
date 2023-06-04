const getCount = () => {
  let _count = 1;

  return () => {
    return _count++;
  };
};

const getCurrent = getCount();

export default {
  'POST /api/users': (req: any, res: any) => {
    setTimeout(() => {
      res.send({
        current: getCurrent(),
        pageSize: 10,
        total: 60,
        records: new Array(10).fill('哇塞').map(() => ({
          id: (Math.random() * 100).toFixed(2),
          name: `娃哈哈${(Math.random() * 100).toFixed(2)}`,
        })),
      });
    }, 1500);
  },
};
