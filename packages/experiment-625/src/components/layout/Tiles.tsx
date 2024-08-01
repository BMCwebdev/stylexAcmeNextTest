import React from 'react';
import * as stylex from '@stylexjs/stylex';

import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';
import { tileColumns } from '@brianAcme/stitch-tokens/layoutTokens.stylex';

type ComponentType = 'div' | 'span';
export type Space = '0' | '25' | '50' | '100' | '200' | '300' | '400' | '500';
type Columns = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

interface TilesProps {
  as?: ComponentType;
  columns?: Columns;
  columnsSM?: Columns;
  columnsMD?: Columns;
  columnsLG?: Columns;
  children?: React.ReactNode;
  space?: Space;
  hspace?: Space;
  vspace?: Space;
}

const SMALL = '@media (max-width: 767px)';
const MEDIUM = '@media (min-width: 768px) and (max-width: 1023px)';
const LARGE = '@media (min-width: 1024px)';

const tilesStyles = stylex.create({
  base: {
    display: 'grid',
  }
});
const columnsDefaultStyles = stylex.create({
  1: {
    gridTemplateColumns: 'minmax(0px, 1fr)',
    [tileColumns.default]: 'minmax(0px, 1fr)',
    [tileColumns.small]: 'minmax(0px, 1fr)',
    [tileColumns.medium]: 'minmax(0px, 1fr)',
    [tileColumns.large]: 'minmax(0px, 1fr)',
  },
  2: {
    gridTemplateColumns: 'repeat(2, minmax(0px, 1fr))',
    [tileColumns.default]: 'repeat(2, minmax(0px, 1fr))',
    [tileColumns.small]: 'repeat(2, minmax(0px, 1fr))',
    [tileColumns.medium]: 'repeat(2, minmax(0px, 1fr))',
    [tileColumns.large]: 'repeat(2, minmax(0px, 1fr))',
  },
  3: {
    gridTemplateColumns: 'repeat(3, minmax(0px, 1fr))',
    [tileColumns.default]: 'repeat(3, minmax(0px, 1fr))',
    [tileColumns.small]: 'repeat(3, minmax(0px, 1fr))',
    [tileColumns.medium]: 'repeat(3, minmax(0px, 1fr))',
    [tileColumns.large]: 'repeat(3, minmax(0px, 1fr))',
  },
  4: {
    gridTemplateColumns: 'repeat(4, minmax(0px, 1fr))',
    [tileColumns.default]: 'repeat(4, minmax(0px, 1fr))',
    [tileColumns.small]: 'repeat(4, minmax(0px, 1fr))',
    [tileColumns.medium]: 'repeat(4, minmax(0px, 1fr))',
    [tileColumns.large]: 'repeat(4, minmax(0px, 1fr))',
  },
  5: {
    gridTemplateColumns: 'repeat(5, minmax(0px, 1fr))',
    [tileColumns.default]: 'repeat(5, minmax(0px, 1fr))',
    [tileColumns.small]: 'repeat(5, minmax(0px, 1fr))',
    [tileColumns.medium]: 'repeat(5, minmax(0px, 1fr))',
    [tileColumns.large]: 'repeat(5, minmax(0px, 1fr))',
  },
  6: {
    gridTemplateColumns: 'repeat(6, minmax(0px, 1fr))',
    [tileColumns.default]: 'repeat(6, minmax(0px, 1fr))',
    [tileColumns.small]: 'repeat(6, minmax(0px, 1fr))',
    [tileColumns.medium]: 'repeat(6, minmax(0px, 1fr))',
    [tileColumns.large]: 'repeat(6, minmax(0px, 1fr))',
  },
  7: {
    gridTemplateColumns: 'repeat(7, minmax(0px, 1fr))',
    [tileColumns.default]: 'repeat(7, minmax(0px, 1fr))',
    [tileColumns.small]: 'repeat(7, minmax(0px, 1fr))',
    [tileColumns.medium]: 'repeat(7, minmax(0px, 1fr))',
    [tileColumns.large]: 'repeat(7, minmax(0px, 1fr))',
  },
  8: {
    gridTemplateColumns: 'repeat(8, minmax(0px, 1fr))',
    [tileColumns.default]: 'repeat(8, minmax(0px, 1fr))',
    [tileColumns.small]: 'repeat(8, minmax(0px, 1fr))',
    [tileColumns.medium]: 'repeat(8, minmax(0px, 1fr))',
    [tileColumns.large]: 'repeat(8, minmax(0px, 1fr))',
  }
});
const columnsStylesSM = stylex.create({
  1: {
    [tileColumns.small]: 'minmax(0px, 1fr)',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  2: {
    [tileColumns.small]: 'repeat(2, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  3: {
    [tileColumns.small]: 'repeat(3, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  4: {
    [tileColumns.small]: 'repeat(4, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  5: {
    [tileColumns.small]: 'repeat(5, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  6: {
    [tileColumns.small]: 'repeat(6, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  7: {
    [tileColumns.small]: 'repeat(7, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  8: {
    [tileColumns.small]: 'repeat(8, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  }
});
const columnsStylesMD = stylex.create({
  1: {
    [tileColumns.medium]: 'minmax(0px, 1fr)',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  2: {
    [tileColumns.medium]: 'repeat(2, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  3: {
    [tileColumns.medium]: 'repeat(3, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  4: {
    [tileColumns.medium]: 'repeat(4, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  5: {
    [tileColumns.medium]: 'repeat(5, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  6: {
    [tileColumns.medium]: 'repeat(6, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  7: {
    [tileColumns.medium]: 'repeat(7, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  8: {
    [tileColumns.medium]: 'repeat(8, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
});
const columnsStylesLG = stylex.create({
  1: {
    [tileColumns.large]: 'minmax(0px, 1fr)',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  2: {
    [tileColumns.large]: 'repeat(2, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  3: {
    [tileColumns.large]: 'repeat(3, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  4: {
    [tileColumns.large]: 'repeat(4, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  5: {
    [tileColumns.large]: 'repeat(5, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  6: {
    [tileColumns.large]: 'repeat(6, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  7: {
    [tileColumns.large]: 'repeat(7, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  },
  8: {
    [tileColumns.large]: 'repeat(8, minmax(0px, 1fr))',
    gridTemplateColumns: {
      default: tileColumns.default,
      [SMALL]: tileColumns.small,
      [MEDIUM]: tileColumns.medium,
      [LARGE]: tileColumns.large,
    }
  }
});
const spaceStyles = stylex.create({
  0: {
    gap: sizes.spacing_0
  },
  25: {
    gap: sizes.spacing_25
  },
  50: {
    gap: sizes.spacing_50
  },
  100: {
    gap: sizes.spacing_100
  },
  200: {
    gap: sizes.spacing_200
  },
  300: {
    gap: sizes.spacing_300
  },
  400: {
    gap: sizes.spacing_400
  },
  500: {
    gap: sizes.spacing_500
  }
});
const hspaceStyles = stylex.create({
  0: {
    columnGap: sizes.spacing_0
  },
  25: {
    columnGap: sizes.spacing_25
  },
  50: {
    columnGap: sizes.spacing_50
  },
  100: {
    columnGap: sizes.spacing_100
  },
  200: {
    columnGap: sizes.spacing_200
  },
  300: {
    columnGap: sizes.spacing_300
  },
  400: {
    columnGap: sizes.spacing_400
  },
  500: {
    columnGap: sizes.spacing_500
  }
});
const vspaceStyles = stylex.create({
  0: {
    rowGap: sizes.spacing_0
  },
  25: {
    rowGap: sizes.spacing_25
  },
  50: {
    rowGap: sizes.spacing_50
  },
  100: {
    rowGap: sizes.spacing_100
  },
  200: {
    rowGap: sizes.spacing_200
  },
  300: {
    rowGap: sizes.spacing_300
  },
  400: {
    rowGap: sizes.spacing_400
  },
  500: {
    rowGap: sizes.spacing_500
  }
});
    

export const Tiles: React.FC<TilesProps> = ({
  as: Component = 'div',
  children,
  columns = '1',
  columnsSM = '1',
  columnsMD,
  columnsLG,
  space = '50',
  hspace,
  vspace,
}) => {

  return (
    <Component {...stylex.props(
      tilesStyles.base,
      columnsDefaultStyles[columns],
      columnsSM && columnsStylesSM[columnsSM],
      columnsMD && columnsStylesMD[columnsMD],
      columnsLG && columnsStylesLG[columnsLG],
      spaceStyles[space],
      hspace && hspaceStyles[hspace],
      vspace && vspaceStyles[vspace],
    )}>
      {children}
    </Component>
  )
};
