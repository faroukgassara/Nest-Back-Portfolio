import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,private jwtService: JwtService) {}

  async validateUser(email: string, mdp: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.mdp === mdp) {
      const { mdp, email,...rest } = user;
      return user;
    }
    return null;
  }
  
  async login(user : any){
    const payload = {user}
    return {
      jwt: this.jwtService.sign(payload),
      
    };
  }
}
