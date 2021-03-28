/* eslint-disable object-shorthand */
import axiosInstance from 'api';

class ApiAdmins {
  static async get({ id, token }) {
    try {
      const response = await axiosInstance.get(`admins/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
      return {
        error: {
          message: 'Une erreur s\'est produite lors de la connexion admin',
        },
      };
    }
  }

  static async create(dataToSend) {
    const {
      userId,
      token,
    } = dataToSend;

    const bodyParameters = {
      customer: {
        user_id: userId,
      },
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axiosInstance.post(
        'admins/',
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

export default ApiAdmins;
