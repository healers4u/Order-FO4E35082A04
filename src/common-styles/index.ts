import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const usePageItemContainerStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '0 50px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 'fit-content',
    },
  }),
);
