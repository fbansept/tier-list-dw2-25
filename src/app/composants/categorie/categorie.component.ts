import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categorie',
  imports: [],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss',
})
export class CategorieComponent {
  @Input()
  categorie?: Categorie;

  @Input()
  afficheBoutonPlus: boolean = true;

  @Input()
  afficheBoutonMoins: boolean = true;

  @Output()
  clickSuppressionImage = new EventEmitter();

  @Output()
  clickDeplacerImage = new EventEmitter();

  onClicSupprimeImage(indexImage: number) {
    this.clickSuppressionImage.emit(indexImage);
  }
  onClicDeplacementImage(
    indexImage: number,
    direction: 'haut' | 'bas' = 'haut',
  ) {
    this.clickDeplacerImage.emit({
      indexImage: indexImage,
      direction: direction,
    });
  }
}
