import React from 'react';
import { useLoading } from '../hooks'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { getDefault } from '../reducers/Default';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiCircularProgress from '@material-ui/core/CircularProgress';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(3)
    },
    appbar: {
      flexGrow: 1,
    }
  }));

export default function Root() {
    const classes = useStyles();
    const [{loadState}, setLoadState, dispatch] = useLoading();
    const handleChange = e => {
        setLoadState({
            ...loadState,
            [e.target.name] : e.target.value
        });
    }
    const handleClick = () => {
        dispatch(getDefault(loadState));
        setLoadState({...loadState, open: true});
    }
    return (
        <div>
            <AppBar position="sticky"  className={classes.appbar}>
                <Toolbar >
                    <Typography variant="h6" className={classes.title}>
                        BoilerPlate
                    </Typography>
                </Toolbar>
            </AppBar>
            <TextField
            label="아무거나 입력"
            name="text"
            onChange={handleChange}
            value={loadState.text}
            />
            <Button onClick={handleClick}>
                클릭!
            </Button>
            <Dialog open={loadState.open}>
                <MuiDialogContent
                style={{
                    background: 'white',
                    width: '160px',
                    minHeight: '80px',
                    textAlign: 'center',
                }}
                >
                <MuiCircularProgress style={{ width: '20%', height: '20%' }} />
                <div style={{ marginTop: '12px' }}>{loadState.text}</div>
                    <Button onClick={()=>{setLoadState({...loadState, open:false})}} >
                        닫기
                    </Button>
                </MuiDialogContent>
            </Dialog>
        </div>
    );
}
