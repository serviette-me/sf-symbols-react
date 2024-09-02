export type IconWeight =
  | "ultralight"
  | "thin"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "heavy"
  | "black"

export type IconProps = {
  weight?: IconWeight
  color?: string
  className?: string
}
