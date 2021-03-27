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
          message: 'Une erreur s\'est produite lors de la récupération des données des macbooks',
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
          message: 'Une erreur s\'est produite lors de la récupération des données du macbook',
        },
      };
    }
  }
}

export default ApiMacbooks;
