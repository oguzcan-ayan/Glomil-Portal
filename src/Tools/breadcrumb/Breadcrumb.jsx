import React from 'react';
import { router } from '../router/router';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from 'react-router-dom';
import { Icon20 } from '../../components/globalIcons/Icons';

function Breadcrumb() {

    const breadcrumbs = useReactRouterBreadcrumbs(router);

    return (
        <>
            <div className='breadcrumb-content'>
                {breadcrumbs.map(({ match, breadcrumb }) => {
                    return <NavLink
                        key={match.pathname}
                        to={match.pathname} >
                        {match.pathname === "/" && <Icon20 className='breadcrumb-home-icon' />}
                        <span className='breadcrumb'>{breadcrumb}</span>
                        {breadcrumbs[breadcrumbs.length - 1].key !== breadcrumb.key &&
                            <span className='split-breadcrumbs'>/</span>}
                    </NavLink>
                })}
            </div>

        </>
    )
}

export default Breadcrumb;