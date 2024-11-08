import { refs } from "./refs";

export function openModal(){
  refs.backdrop.classList.remove("hidden");
}

export function closeModal(){
  refs.backdrop.classList.add("hidden");
}