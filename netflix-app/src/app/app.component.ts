import { Component } from '@angular/core';

interface Film {
  title: string;
  image: string;
}

interface FilmSection {
  section: string;
  films: Film[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  public top10Films: FilmSection = {
    section: 'Top 10',
    films: [
      {
        title: 'La Casa de Papel',
        image: 'assets/images/Top10/1-papel.webp'
      },
      {
        title: 'La Reina del Flow',
        image: 'assets/images/Top10/2-reina.webp'
      },
      {
        title: 'Titanes',
        image: 'assets/images/Top10/3-titanes.webp'
      },
      {
        title: 'Lost In Space',
        image: 'assets/images/Top10/4-lostinspace.webp'
      },
      {
        title: 'Donde Caben Dos',
        image: 'assets/images/Top10/5-dondecaben.webp'
      },
      {
        title: 'Aquí No Hay Quien Viva',
        image: 'assets/images/Top10/6-aquinohay.webp'
      },
      {
        title: 'Blacklist',
        image: 'assets/images/Top10/7-blacklist.webp'
      },
      {
        title: 'Ricos y Mimados',
        image: 'assets/images/Top10/8-ricos.webp'
      },
      {
        title: 'El Poder del Perro',
        image: 'assets/images/Top10/9-poder.webp'
      },
      {
        title: 'The Good Doctor',
        image: 'assets/images/Top10/10-gooddoctor.webp'
      }
    ]
  };

  public animeFilms: FilmSection = {
    section: 'Anime',
    films: [
      {
        title: 'Ajin',
        image: 'assets/images/Anime/ajin.jpg'
      },
      {
        title: 'El Castillo Ambulante',
        image: 'assets/images/Anime/castilloambulante.webp'
      },
      {
        title: 'Chihiro',
        image: 'assets/images/Anime/chihiro.webp'
      },
      {
        title: 'Evangelion',
        image: 'assets/images/Anime/evangelion.webp'
      },
      {
        title: 'GITS Arise',
        image: 'assets/images/Anime/gitsarise.webp'
      },
      {
        title: 'Gundam',
        image: 'assets/images/Anime/gundam.webp'
      },
      {
        title: 'Laputa',
        image: 'assets/images/Anime/laputa.webp'
      },
      {
        title: 'La Princesa Mononoke',
        image: 'assets/images/Anime/mononoke.webp'
      },
      {
        title: 'Nino Kuni',
        image: 'assets/images/Anime/ninokuni.jpg'
      },
      {
        title: 'Perfect Blue',
        image: 'assets/images/Anime/perfectblue.webp'
      }
    ]
  };

  public actionFilms: FilmSection = {
    section: 'Action',
    films: [
      {
        title: 'Ejército de los Muertos',
        image: 'assets/images/Accion/ejercitomuertos.jpg'
      },
      {
        title: 'El Protector',
        image: 'assets/images/Accion/elprotector.webp'
      },
      {
        title: 'Equalizador 2',
        image: 'assets/images/Accion/equalizer2.webp'
      },
      {
        title: 'Heat',
        image: 'assets/images/Accion/heat.webp'
      },
      {
        title: 'Jack Reacher',
        image: 'assets/images/Accion/jackreacher.webp'
      },
      {
        title: 'John Wick 2',
        image: 'assets/images/Accion/johnwick2.webp'
      },
      {
        title: 'Kill Bill 2',
        image: 'assets/images/Accion/killbill2.webp'
      },
      {
        title: 'Mision Imposible',
        image: 'assets/images/Accion/misionimposiblenacion.webp'
      },
      {
        title: 'Renacido',
        image: 'assets/images/Accion/renacido.webp'
      },
      {
        title: 'Terminator 2',
        image: 'assets/images/Accion/terminator2.webp'
      },
      {
        title: 'Worldwarz',
        image: 'assets/images/Accion/worldwarz.webp'
      }
    ]
  };
  public comediaFilms: FilmSection = {
    section: 'Comedia',
    films: [
      {
        title: 'Casi 300',
        image: 'assets/images/Comedia/casi300.webp'
      },
      {
        title: 'Los Cazafantasmas',
        image: 'assets/images/Comedia/cazafantasmas.webp'
      },
      {
        title: 'El Dictador',
        image: 'assets/images/Comedia/dictador.webp'
      },
      {
        title: 'Érase Una Vez en Hollywood',
        image: 'assets/images/Comedia/erasehollywood.webp'
      },
      {
        title: 'Padre de Familia',
        image: 'assets/images/Comedia/familyguy.webp'
      },
      {
        title: 'Juerga Hasta el Fin',
        image: 'assets/images/Comedia/juerga.webp'
      },
      {
        title: 'La Terminal',
        image: 'assets/images/Comedia/laterminal.webp'
      },
      {
        title: 'Los Padres de Ella',
        image: 'assets/images/Comedia/padresella.webp'
      },
      {
        title: 'Regreso al Futuro',
        image: 'assets/images/Comedia/regresofuturo.webp'
      },
      {
        title: 'Rick y Morty',
        image: 'assets/images/Comedia/rickandmorty.webp'
      },
      {
        title: 'Scary Movie 3',
        image: 'assets/images/Comedia/scarymovie3.webp'
      },
      {
        title: 'Ted 2',
        image: 'assets/images/Comedia/ted2.webp'
      }
    ]
  };
}
