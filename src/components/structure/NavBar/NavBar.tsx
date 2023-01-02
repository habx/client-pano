import * as React from 'react'
import { Link, NavLinkProps } from 'react-router-dom'

import {
  Icon,
  NavBar as NavBarContainer,
  NavBarItem,
  NavBarItemProps,
  palette,
} from '@habx/ui-core'

import { Container } from './NavBar.style'
const NavBarLinkItem = NavBarItem as React.ForwardRefExoticComponent<
  NavBarItemProps & (NavLinkProps | React.HTMLProps<HTMLAnchorElement>)
>

export const NavBar: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <Container>
    <NavBarContainer backgroundColor={palette.redSunset[900]}>
      <NavBarLinkItem
        as={Link}
        label="Home"
        icon={<Icon icon="house-outline" />}
        to="/tpl"
      />
    </NavBarContainer>
    {children}
  </Container>
)
