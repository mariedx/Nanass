import axiosInstance from 'api';

class ApiMacbooks {
  static async getAllMacbooks() {
    try {
      const response = await axiosInstance.get('/macbooks');

      const { data } = response;

      return data;
      // return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return {
        error: {
          message: 'Erreur',
        },
      };
    }
  }

  static async getOneMacbook(id) {
    try {
      const response = await axiosInstance.get(`/macbooks/${id}`);

      const { data } = response;

      return data;
      // return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return {
        error: {
          message: 'Erreur',
        },
      };
    }
  }
}

export default ApiMacbooks;
