import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Categorie = {
  titre: string;
  images: string[];
};

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  urlSaisie = '';
  nomCategorieSaisie = '';

  listeCategorie: Categorie[] = [];

  ngOnInit() {
    //on tente de recuperer une eventuelle sauvegarde
    const listeCategorieSauvegarde = localStorage.getItem('listeCategorie');

    //si c'est la première fois que l'on arrive sur l'app
    if (listeCategorieSauvegarde == null) {
      //on définit des catégories par défaut
      this.listeCategorie = [
        { titre: 'S', images: [] },
        { titre: 'A', images: [] },
        { titre: 'B', images: [] },
        { titre: 'C', images: [] },
      ];

      this.sauvegarde();
    } else {
      //on transforme la liste de catégorie du localstorage en objet javascript,
      //et on l'affecte à listeCategorie
      this.listeCategorie = JSON.parse(listeCategorieSauvegarde);
    }
  }

  sauvegarde() {
    //on transforme ces catégories en JSON
    const jsonListeCategorieParDefaut = JSON.stringify(this.listeCategorie);

    //On sauvegarde le JSON dans le localstorage à la clé "listeCategorie"
    localStorage.setItem('listeCategorie', jsonListeCategorieParDefaut);
  }

  onAjoutImage() {
    this.listeCategorie[0].images.push(this.urlSaisie);
    this.urlSaisie = '';
    this.sauvegarde();
  }

  onAjoutCategorie() {
    this.listeCategorie.push({ titre: this.nomCategorieSaisie, images: [] });
    this.nomCategorieSaisie = '';
    this.sauvegarde();
  }

  onClicDeplacementImage(
    indexCategorie: number,
    indexImage: number,
    direction: 'haut' | 'bas' = 'haut',
  ) {
    //on recupere l'url de l'image cliquée
    const urlImageAcopier =
      this.listeCategorie[indexCategorie].images[indexImage];

    //on copie l'url dans la categorie suivante
    this.listeCategorie[
      indexCategorie + (direction == 'haut' ? -1 : 1)
    ].images.push(urlImageAcopier);

    //on supprime l'image d'origine/)à
    this.listeCategorie[indexCategorie].images.splice(indexImage, 1);

    this.sauvegarde();
  }

  onClicSupprimeImage(indexCategorie: number, indexImage: number) {
    //on supprime l'image
    this.listeCategorie[indexCategorie].images.splice(indexImage, 1);

    this.sauvegarde();
  }
}
