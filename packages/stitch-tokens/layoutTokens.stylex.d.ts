import { VarGroup } from '@stylexjs/stylex';

type TTileColumns = Readonly<{
  default: string;
  small: string;
  medium: string;
  large: string;
}>;
type TColumn = Readonly<{
  flex: string;
  width: string;
  maxWidth: string;
  minWidth: string;
  defaultDirection: string;
  smallDirection: string;
  mediumDirection: string;
}>;

export declare const tileColumns: VarGroup<TTileColumns>;
export declare const column: VarGroup<TColumn>;