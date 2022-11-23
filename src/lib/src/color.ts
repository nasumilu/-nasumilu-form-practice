import {ColorLike} from "../typings/color-like";

export class Color {

  #value: number[];

  constructor(options?: ColorLike) {
    if (!Array.isArray(options)) {
      options = [options?.red ?? 0, options?.green ?? 0, options?.blue ?? 0, options?.alpha ?? 1]
    }
    this.#value = options;
  }

  get hex(): string {
    return `#${this.#value.slice(0, 3).map(v => v.toString(16)).join('')}`
  }

  get hexa() {
    return `${this.hex}${Math.floor((this.#value[3] * 255)).toString(16)}`
  }

  get rgb() {
    return `rgb(${this.#value.slice(0, 3).map(v => v.toString()).join(', ')})`;
  }

  get rgba() {
    return this.rgb.replace('rgb', 'rgba')
      .replace(')', `, ${this.#value[3]})`);
  }

  get red(): number {
    return this.#value[0];
  }

  set red(value: number) {
    this.#value[0] = value;
  }

  get green(): number {
    return this.#value[1];
  }

  set green(value: number) {
    this.#value[1] = value;
  }

  get blue(): number {
    return this.#value[2];
  }

  set blue(value: number) {
    this.#value[2] = value;
  }

  get alpha(): number {
    return this.#value[3];
  }

  set alpha(value: number) {
    this.#value[3] = value;
  }

  stringify(): string {
    return JSON.stringify(this.#value);
  }

  static parse(str: string): Color {
    const values = (JSON.parse(str) as ColorLike);
    return new Color(values);
  }

}
