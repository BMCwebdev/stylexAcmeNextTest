import { VarGroup } from '@stylexjs/stylex';

type TTileColumns = Readonly<{
  "--x-default": string;
  "--x-small": string;
  "--x-medium": string;
  "--x-large": string;
}>;
type TColumn = Readonly<{
  "--x-flex": string;
  "--x-width": string;
  "--x-maxWidth": string;
  "--x-minWidth": string;
  "--x-defaultDirection": string;
  "--x-smallDirection": string;
  "--x-mediumDirection": string;
}>;

type TLayoutTokens = TTileColumns & TColumn;

declare const tileColumns: VarGroup<TTileColumns>;
declare const column: VarGroup<TColumn>;

export declare const layoutTokens: VarGroup<TCoreTokens>;