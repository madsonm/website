import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ApiService,ServiceRequest } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private api: ApiService
  ) { }

  get() {
    const request = {
      action: 'POST'
      ,url: '/cgi/getData.cgi'
      ,body: { category: 'recipes' }
      ,message: `Getting Recipes`
    } as ServiceRequest;

    return this.api.call(request).pipe(map(response => (response || {}).data || []));
  }
}
