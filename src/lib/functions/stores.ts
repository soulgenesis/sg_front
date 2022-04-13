import { readable, writable } from "svelte/store";

export const canConnect = readable(true);

export const dropdownActive = writable(false);