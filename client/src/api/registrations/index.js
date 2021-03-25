/* eslint-disable object-shorthand */

import axiosInstance from 'api';

class ApiRegistrations {
  static async signin({ email, password }) {
    try {
      const response = await axiosInstance.post('login', {
        user: {
          email: email,
          password: password,
        },
      });

      const token = response.headers.authorization.split('Bearer ')[1];
      const { data } = response.data;
      const { attributes } = data;
      const result = {
        token,
        id: data.id,
        email: attributes.email,
        adminId: attributes.admin_id,
        customerId: attributes.customer_id,
      };

      return result;
    } catch (error) {
      console.error(error);
      return {
        error: {
          message: 'Une erreur vient de se produire lors de la connexion',
        },
      };
    }
  }

  static async signup() {
    const data = await axiosInstance.post('signup');

    return data;
  }
}

export default ApiRegistrations;
