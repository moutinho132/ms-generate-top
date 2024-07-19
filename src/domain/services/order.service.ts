export class OrderService {
  public async buildOrder(data: any): Promise<any> {
    try {
      return {
        orderId: data.externalOrderId,
        eventType: 'ORIGIN',
        origin: 'VTR',
        status: 'OK',
        message: data.message,
        country: 'CL',
      };
    } catch (error: any) {
      const message = `error from order service with message: ${error.message}`;

      throw new Error(message);
    }
  }
}
