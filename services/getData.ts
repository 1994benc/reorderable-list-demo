export const getData = async () => {
  const promise = new Promise((resolve, reject) => {
    const dataString = localStorage.getItem("data");
    if (!dataString) {
      resolve(null);
    } else {
      const data = JSON.parse(dataString);
      resolve(data);
    }
  });

  return promise;
};
