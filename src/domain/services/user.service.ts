import { DynamoDB } from 'aws-sdk';

const dynamoDB = new DynamoDB.DocumentClient({
  region: 'local',
  endpoint: 'http://localhost:7001',
});

export class UserService {
  public async buildUser(data: any,codOtp:any,uui:any): Promise<any> {
    console.log("No esta llegando data :",data);
    
    try {

      const params = {
        TableName: 'otp',
        Item: {
          email: data.email,
          codOTp:codOtp,
          uui:data.uui
        },
      };
      await dynamoDB.put(params).promise();
      
      return {
        email: data.email,
        username: data.username,
        origin: data.app,
        status: 'OK',
        message: data.dateCreation,
        codOtp:codOtp
      };
    } catch (error: any) {
      const message = `error from user service with message: ${error.message}`;

      throw new Error(message);
    }
  }
}
