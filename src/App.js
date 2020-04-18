import React from "react";
import { Typography, CssBaseline, Container, AppBar, Grid, Paper, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// https://codesandbox.io/s/react-hook-form-usefieldarray-nested-arrays-x7btr?from-embed=&file=/src/nestedFieldArray.js
// https://codesandbox.io/s/react-hook-form-controller-auto-focus-5tru5?file=/src/index.js:1148-1188
// https://codesandbox.io/s/aws-sdk-auth-bs4gk

// https://codesandbox.io/s/react-hook-form-usefieldarray-ysb49
// https://codesandbox.io/s/react-hook-form-usefieldarray-rfs6s
// https://codesandbox.io/s/react-hook-form-usefieldarray-kjlkz

// https://codesandbox.io/s/react-hook-form-errors-validatecriteriamode-all-xjzn0?file=/src/index.js
// Role your own: https://itnext.io/how-i-tried-to-validate-react-forms-with-hooks-31634fc5385b
// https://codesandbox.io/s/9ywq085k9w
// https://medium.com/codefully-io/react-forms-validation-with-formik-and-material-ui-1adf0c1cae5c

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e22925"
  },
  pageinfo: {
    color: "#646467",
    marginBottom: "10px",
    fontSize: "1.3em",
    fontWeight: "400"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="primary" position="static" className={classes.root}>
        <Toolbar style={{ height: 64 }}>
          <Grid container justify="space-between">
            <Typography display="inline" color="inherit">
              My Application
            </Typography>
            <Typography display="inline" align="right">
              <Link color="inherit" target="_blank" rel="noreferrer" href="https://google.com">
                Read Docs
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography style={{ height: 64 }} />
      <Container maxWidth="md">
        <Paper style={{ padding: 16, marginTop: 20 }}>
          <Typography display="inline" className={classes.pageinfo}>
            Section Header
          </Typography>
          <Grid container flex-direction="row" alignItems="flex-start" spacing={2}>
            Section
          </Grid>
        </Paper>
      </Container>
      <CssBaseline />
      <Typography variant="subtitle2" align="center" gutterBottom>
        A Simple Application
      </Typography>
    </React.Fragment>
  );
}

export default App;
