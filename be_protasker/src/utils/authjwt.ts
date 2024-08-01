import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class Auth {
    
    static generateAccessToken = ( user:string ) => {
        const payload = { user }
        console.log('Generating token with payload:', payload);
            const data = jwt.sign(payload,process.env.SECRET, {expiresIn: '5m'});
            console.log(data)
            return data;
    }
}
// export const generateAccessToken = ( user:string ) => {
//         return jwt.sign(user,process.env.SECRET, {expiresIn: '5m'});
// }
