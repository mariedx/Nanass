/* eslint-disable object-shorthand */
import axiosInstance from 'api';

class ApiCustomers {
  static async get({ id, token }) {
    try {
      const response = await axiosInstance.get(`customers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      return {
        error: {
          message: 'Une erreur s\'est produite lors de la connexion',
        },
      };
    }
  }

  static async create(dataToSend) {
    const {
      userId,
      firstName,
      lastName,
      token,
    } = dataToSend;

    const bodyParameters = {
      customer: {
        user_id: userId,
        first_name: firstName,
        last_name: lastName,
      },
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axiosInstance.post(
        'customers/',
        bodyParameters,
        config,
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return {
        error: {
          message: 'Une erreur s\'est produite lors de la création de client. Veuillez contacter l\'administration du site à part de la page contact',
        },
      };
    }
  }
}

export default ApiCustomers;
