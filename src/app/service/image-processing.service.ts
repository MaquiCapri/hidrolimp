import { Injectable } from '@angular/core';
import { FileHandle } from '../model/file-handle.model';
import { Producto } from '../producto.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {
  
  constructor(private sanitizer: DomSanitizer) { }

    public createImages(producto: Producto){
      const productImages: any[] = producto.productImages;

      const productImagesToFileHandle: FileHandle[] = [];

      for (let i = 0; i < productImages.length; i++){
        const imageFileData = productImages[i];

        const imageBlob=this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
  
         const imageFile = new File([imageBlob] , imageFileData.name, {type:imageFileData.type});

      const finalFileHandle : FileHandle ={
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
       };

       productImagesToFileHandle.push(finalFileHandle);
    }

    producto.productImages = productImagesToFileHandle;
    return producto;
    }



   public dataURItoBlob(picBytes, imageType){
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i = 0; i < byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], { type: imageType });
    return blob;
   }

  }
