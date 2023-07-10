import { getUsers } from './user';

export async function login(data) {
  try {
    let { email, password } = data;

    let users = await getUsers();

    let user = users.find(user => user.email === email);

    if (user && user.password === password) {
      return {
        message: 'User exists',
        success: true
      };
    } else if (user && user.password !== password) {
      return {
        message: 'Password did not match',
        success: false
      };
    } else {
      return {
        message: 'User not found',
        success: false
      };
    }
  } catch (error) {

  }
}
