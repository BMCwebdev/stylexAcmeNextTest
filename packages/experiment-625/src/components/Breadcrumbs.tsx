import { ChevronRight } from 'lucide-react';
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  BreadcrumbProps,
  BreadcrumbsProps,
  LinkProps,
} from 'react-aria-components';
import { Link } from './Link';
import * as stylex from '@stylexjs/stylex';
import { colorsIcon } from '@brianAcme/stitch-tokens/colors.stylex';
import { sizes } from '@brianAcme/stitch-tokens/sizes.stylex';

const s = stylex.create({
  breadcrumbs: {
    display: 'flex',
    gap: sizes.spacing_50,
  },
  breadcrumb: {
    alignItems: 'center',
    display: 'flex',
    gap: sizes.spacing_50,
  },
  icon: {
    width: sizes.spacing_200,
    height: sizes.spacing_200,
    color: colorsIcon.secondary,
  }
});

interface BreadcrumbItem {
  id: number | string;
  label: string;
  href?: string;
}

export function Breadcrumbs(props: BreadcrumbsProps<BreadcrumbItem> & { items?: BreadcrumbItem[] }) {
  const { items, children, ...restProps } = props;
  return (
    // For now it is assumed that Breadcrumbs will always be used as a primary or secondary navigation element. If this changes, we can add a variant prop to remove the nav element. 
    // It is best to keep the number of landmarks on a page to a minimum, so only place breadcrumbs in a navigation landmark when it represents the primary or secondary navigation for the page. For example, breadcrumbs within table rows or popovers most likely should not be landmarks.
    items ? (
      <AriaBreadcrumbs {...restProps} {...stylex.props(s.breadcrumbs)} items={items}>
        {(item: BreadcrumbItem) => (
          <Breadcrumb key={item.id} href={item.href ? item.href : undefined}>
            {item.label}
          </Breadcrumb>
        )}
      </AriaBreadcrumbs>
    ) : (
      <AriaBreadcrumbs {...restProps} {...stylex.props(s.breadcrumbs)}>
        {children}
      </AriaBreadcrumbs>
    )
  );
}

export function Breadcrumb(props: BreadcrumbProps & LinkProps) {
  return (
    <AriaBreadcrumb {...props} {...stylex.props(s.breadcrumb)}>
      <Link {...props} />
      {props.href && <ChevronRight {...stylex.props(s.icon)} />}
    </AriaBreadcrumb>
  );
}
