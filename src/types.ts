type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type ColorProfile = [string, number, number, number, number];

export type ColorProfiles = {
  [key: string]: ColorProfile;
};

export type DefaultColorProfile =
  | "hsldefault"
  | "default"
  | "dark"
  | "light"
  | "pastel"
  | "wide"
  | "superwide"
  | "saturated"
  | "greyscale";

export type AllInputOptions = {
  colorProfile: DefaultColorProfile | ColorProfile;
  hueCenter: number;
  hueScale: number;
  generator: "halton" | "primeWalk";
  primeWalkHueDistance: number;
};

export type InputOptions = Partial<AllInputOptions>;

export type OutputOptions = Overwrite<
  AllInputOptions,
  { colorProfile: DefaultColorProfile | "user" }
>;

export type Input = string | number;

export type IDeterminatic = {
  getColor(input: Input): string | undefined;
};
