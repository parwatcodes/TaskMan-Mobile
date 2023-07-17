export const getColorByStatus = (status) => {

};

// Transform Object Key to value and Value to Label
export const transformObject = (data) => {
  return Object.keys(data).map((key) => ({
    key: key,
    value: data[key]
  }));
};

export function stringifyIt(data) {
  return JSON.stringify(data);
}

export function parseIt(data) {
  return JSON.parse(data);
}

export function generatePassword(email) {
  let defaultPassword = 'Note@123';

  if (email) {
    return email.split('@')[0] + '@123';
  }

  return defaultPassword;
}

export function getNameAffr(fullName) {
  let [first, last] = fullName.split(' ');

  let a = first?.[0];
  let b = last?.[0];


  return (a + b).toUpperCase();
}
