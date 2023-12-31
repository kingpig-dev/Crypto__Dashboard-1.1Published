import React, { useState, 
  // useEffect 
} from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
// import { IconButton } from '@material-ui/core';
// import { GitHub } from '@material-ui/icons';
// import { ethers } from 'ethers';
import AboutDialog from './AboutDialog';
// import TooltipBasicLayout from '../../../templates/TooltipBasicLayout';

// import { connectWallet, getCurrentWalletConnected, getContract } from "../../../../common/interact";
//eslint-disable-next-line
const useStyles = makeStyles((theme: Theme) => ({
  githubButton: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.card.paper,
    borderRadius: 12,
    '&:hover': {
      backgroundColor: `${theme.palette.text.secondary}80`
    }
  }
}));

const GitHubButton: React.FC = () => {
  // const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* <TooltipBasicLayout title="View project details">
        <IconButton className={classes.githubButton} id='connect-button'>
          <GitHub />
        </IconButton>
      </TooltipBasicLayout> */}
      <AboutDialog open={open} toggleClose={() => setOpen(false)} />
    </>
  )
}

export default GitHubButton;
