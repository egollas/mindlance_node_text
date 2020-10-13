import { Router } from 'express';

interface ResponseInformationType {
   firstName: String;
   lastName: String;
   clientId: String;
}
interface requestInformationType {
  data: string;
}
const parseRouter = Router();

parseRouter.post('/parse', (Request, Response) => {
  try{
    const userInfo : requestInformationType = Request.body
    const parseUserInfo :  ResponseInformationType = {
      firstName : '',
      lastName: '',
      clientId: ''
    }
    let  data  = userInfo.data
    parseUserInfo.firstName = data.split('0000')[0]
    data = data.split('0000')[1]
    parseUserInfo.lastName = data.split('000')[0]
    parseUserInfo.clientId = data.split('000')[1].slice(0, 3) + "-" + data.split('000')[1].slice(3, 7) 
    return Response.json({statusCode: 200, data: parseUserInfo})
  }
  catch(e) {
    return Response.json({error: "Requst body hasn't been formated"})
  }
})

export default parseRouter;