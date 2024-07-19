import * as eventMock from '../tests/unit/mocks/event.mock.json';
import { handler } from './app';

describe('App handler test suite', () => {
  let event: any;

  beforeEach(() => {
    event = eventMock;
  });

  it('should build an order', async () => {
    const order = await handler(event);

    expect(order).toEqual({
      body: {
        country: 'CL',
        eventType: 'ORIGIN',
        message: 'this is a test',
        orderId: 'v12345-01',
        origin: 'VTR',
        status: 'OK',
      },
      statusCode: 200,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
