/* eslint-disable object-shorthand */
import axiosInstance from 'api';

class ApiCustomers {
  static async get({ id, token }) {
    try {
      const response = await axiosInstance.get(`customers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      return {
        error: {
          message: 'Une erreur vient de se produire lors de la connexion',
        },
      };
    }
  }
}

export default ApiCustomers;
