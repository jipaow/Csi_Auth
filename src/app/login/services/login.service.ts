import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Injectable()
export class LoginService {

  constructor(private api: ApiService) { }
}
