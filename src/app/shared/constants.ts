export const environmentConstants = {
    baseUrl: 'http://localhost',
    port: 3000,
    get apiUrl(): string {
      return `${this.baseUrl}:${this.port}`;
    }
  };