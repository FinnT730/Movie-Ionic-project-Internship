import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'youtubeEmbed'
})
export class YoutubeEmbedPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {

  }

  transform(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`);
  }

}
