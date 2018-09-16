import React from 'react';
import Typography from '@material-ui/core/Typography';

import FilterLink from './FilterLinkComponent';

export default () => (
    <Typography paragraph>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL'>
            All
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_ACTIVE'>
            Active
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_COMPLETED'>
            Completed
        </FilterLink>
    </Typography>
);