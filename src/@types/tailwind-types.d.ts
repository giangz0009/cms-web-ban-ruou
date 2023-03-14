type ThemeColors = TTextColor | TBgColor | TBgImage;
type TailWindRound =
  | "rounded-none"
  | "rounded-sm"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-2xl"
  | "rounded-3xl"
  | "rounded-full";

type TBorderColorWithOpacity = keyof Prefix<
  typeof AppColors,
  "border-",
  Opacity
>;
type TBorderColorWithoutOpcity = keyof Prefix<typeof BgColor, "border-">;

type TBorderColor = TBorderColorWithoutOpcity | TBorderColorWithOpacity;
