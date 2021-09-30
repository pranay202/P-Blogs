import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        h1:{ 
            fontFamily: ['"Crafty Girls"', 'Open Sans'].join(',')
        }
       }
})

export default theme;
