import React from 'react';
import Typography from '@material-ui/core/Typography';

import FilterLink from './FilterLinkComponent';

export default () => (
    <Typography paragraph>
        Show:
        {' '}
        <FilterLink filter='all'>
            All
        </FilterLink>
        {', '}
        <FilterLink filter='active'>
            Active
        </FilterLink>
        {', '}
        <FilterLink filter='completed'>
            Completed
        </FilterLink>
    </Typography>
);