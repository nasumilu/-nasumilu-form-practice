import { Injectable } from '@angular/core';
import {
  ChainedCachePool,
  NamespaceCachePool,
} from "../../../cache/src/cache";
import {CachePoolInterface, ReplacerFn, ReviverFn, ValueFn} from "../../../cache/src/types";

export enum CacheNamespace {
  LOCAL = 'local',
  SESSION = 'session',
  MEMORY = 'memory'
}

@Injectable({
  providedIn: 'root'
})
export class CacheService implements CachePoolInterface {

  readonly #cache: CachePoolInterface;

  constructor() {
    this.#cache = new ChainedCachePool(
      new NamespaceCachePool(CacheNamespace.LOCAL, window.localStorage),
      new NamespaceCachePool(CacheNamespace.SESSION, window.sessionStorage),
      new NamespaceCachePool(CacheNamespace.MEMORY)
    );
  }

  clear(): void {
    this.#cache.clear();
  }

  delete<T>(key: string): void {
    this.#cache.delete<T>(key);
  }

  get<T>(key: string, value: ValueFn<T> | T, ttl?: number | Date, replacer?: ReplacerFn<T>, reviver?: ReviverFn<T>): T {
    return this.#cache.get<T>(key, value, ttl, replacer, reviver);
  }

  has(key: string): boolean {
    return this.#cache.has(key);
  }
}
