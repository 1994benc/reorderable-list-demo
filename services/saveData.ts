export const saveData = async (data: any) => {
  const promise = new Promise((resolve, reject) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem("data", dataString);
    resolve(data);
  });

  return promise;
};
