export default class Currency {
  static async getCurrency() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        if (response.status === 403 || response.status === 404) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}
