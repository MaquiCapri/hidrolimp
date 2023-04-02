import { Pipe, PipeTransform } from "@angular/core";

//pipe para cuando no se puede iterar porque es un objeto y se nesecita un array
@Pipe({
name: 'objToArray'
})

export class ObjToArrayPipe implements PipeTransform {
    transform(object: any = []): any {

return Object.values(object);   
 }

}