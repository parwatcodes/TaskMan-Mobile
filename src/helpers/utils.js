export const getColorByStatus = (status) => {

};

// Transform Object Key to value and Value to Label
export const transformObject = (data) => {
  return Object.keys(data).map((key) => ({
    key: key,
    value: data[key]
  }));
};
