/* eslint-disable camelcase */
/* eslint-disable object-shorthand */

import axiosInstance from 'api';

class ApiSessions {
  static async logout({ token }) {
    try {
      await axiosInstance.delete('logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        message: 'La déconnexion réalisée avec succès !',
      };
    } catch (error) {
      return {
        error: {
          message: 'Une erreur s\'est produite lors de la déconnexion',
        },
      };
    }
  }
}

export default ApiSessions;
