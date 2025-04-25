import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  urlSaisie = '';

  listeCategorie = [
    {
      titre: 'S',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBt8KutuFKY80alLnA2fsk4HgqOUdrVkDCQ&s',
        'https://www.vsveicolispeciali.com/wp-content/uploads/2024/01/pastel-de-belem-pasteis-de-nata-street-food.jpg',
      ],
    },
    { titre: 'A', images: [] },
    {
      titre: 'B',
      images: [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/89/38/29/fala-burger.jpg?w=600&h=400&s=1',
      ],
    },
    { titre: 'C', images: [] },
  ];

  onAjoutImage() {
    this.listeCategorie[0].images.push(this.urlSaisie);
    this.urlSaisie = '';
  }

  onClicDeplacementImage(indexCategorie: number, indexImage: number, direction : "haut" | "bas" = "haut") {
    //on recupere l'url de l'image cliquée
    const urlImageAcopier =
      this.listeCategorie[indexCategorie].images[indexImage];

    //on copie l'url dans la categorie suivante
    this.listeCategorie[indexCategorie + (direction == "haut" ? -1 : 1)].images.push(urlImageAcopier);

    //on supprime l'image d'origine
    this.listeCategorie[indexCategorie].images.splice(indexImage, 1);
  }
}
