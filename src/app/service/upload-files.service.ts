import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>>{
    const formData : FormData = new FormData();
    formData.append('files', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'

    });
    return this.http.request(req);
  }

  getFiles(){
    return this.http.get(`${this.baseUrl}/files`)
  }

  deleteFile(filename : string){
    return this.http.get(`${this.baseUrl}/${filename}`);
  }

}
