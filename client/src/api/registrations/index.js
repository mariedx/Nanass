/* eslint-disable camelcase */
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

  static async signup(dataToSend) {
    const {
      email,
      password,
      passwordConfirmation,
    } = dataToSend;

    try {
      const response = await axiosInstance.post('signup', {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });

      const token = response.headers.authorization.split('Bearer ')[1];
      const { data } = response.data;

      const { attributes } = data;
      const result = {
        token,
        id: data.id,
        email: attributes.email,
      };

      return result;
    } catch (error) {
      console.error(error);
      console.error('Api signup error', error.response);

      if (error.response.data.errors.filter((err) => err.title === 'Invalid email').length !== 0) {
        return {
          error: {
            message: 'Cet email est déjà utilisé',
          },
        };
      }

      return {
        error: {
          message: 'Une erreur vient de se produire lors de l\'inscription',
        },
      };
    }
  }
}

export default ApiRegistrations;
