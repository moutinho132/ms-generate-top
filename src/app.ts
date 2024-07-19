import { UserService } from './domain/services/user.service';
import { v4 as uuidv4 } from 'uuid';


export const handler: any = async (event: any) => {
  console.log('Evento :', event);
  const { body } = event;
  console.log('Body', body);
  const userService = new UserService();
  const codOTp = Math.floor(100000 + Math.random() * 900000).toString();
  const uuid = uuidv4();
 
  try {
    const result = await userService.buildUser(event, codOTp,uuid);
    return {
      statusCode: 200,
      body: JSON.stringify({
        uuid,
        codOTp
      }),
    };
  } catch (error: any) {
    const message = `error from service: ${error.message}`;
    throw new Error(message);
  }
};
