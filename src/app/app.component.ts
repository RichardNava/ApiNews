import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias-api';
  listaNoticias: any[] = [];
  loading = false;

  constructor(private _api: NewsService) {

  }

  buscarNoticia(parametro: any,) {
/*     console.log('Soy el padre');
    console.log(parametro); */
    
    // Sin spinner
    this._api.getNoticias(parametro).subscribe(result => {
      console.log(result);
      this.loading = false;
      this.listaNoticias = result.articles;
    }
    )
    
    //Con spinner
/*     this.loading = true;

    this.listaNoticias = [];
    setTimeout(()=>{
      this._api.getNoticias(parametro).subscribe(result => {
        console.log(result);
        this.loading = false;
        this.listaNoticias = result.articles;
      }
      )
    },1000) */
  }
}
