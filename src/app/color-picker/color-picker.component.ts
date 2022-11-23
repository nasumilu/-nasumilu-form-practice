import {Component, OnInit} from '@angular/core';
import {CacheNamespace, CacheService} from "../cache.service";
import {Color} from "../../lib/src/color";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  private static readonly cacheKey = `${CacheNamespace.LOCAL}.default-color`;

  #color: Color;

  constructor(private cacheService: CacheService) {
    let color = new Color([0, 0, 0, 1]);
    this.#color = this.cacheService.get<Color>(
      ColorPickerComponent.cacheKey,
      color,
      Infinity,
      color.stringify.bind(color),
      Color.parse
    );
  }

  get color(): Color {
    return this.#color;
  }

  set color(value: Color) {
    this.#color = value;
    this.cacheColor();
  }

  cacheColor(): void {
    this.cacheService.delete(ColorPickerComponent.cacheKey);
    this.cacheService.get<Color>(
      ColorPickerComponent.cacheKey,
      this.#color,
      Infinity,
      this.#color.stringify.bind(this.#color),
      Color.parse
    );
  }

  ngOnInit(): void {

  }

}
