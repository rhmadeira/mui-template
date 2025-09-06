import { IconButton, Popover, Stack, Typography } from '@mui/material';
import TextGrid from '../text-grid';
import { CopyAll } from '@mui/icons-material';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

interface ITextGridCopyProps {
  input: string;
  disabled?: boolean;
}

export default function TextGridButtonCopy({ input, disabled }: ITextGridCopyProps) {
  const [text, CopyText] = useCopyToClipboard();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    if (text) {
      setTimeout(() => {
        handleClose();
      }, 1000);
    }
  }, [text]);
  return (
    <Stack direction={'row'} alignItems={'center'} height={'100%'}>
      {input && (
        <IconButton
          size="small"
          id={id}
          aria-describedby={id}
          onClick={(e) => {
            handleClick(e);
            CopyText(input);
          }}
        >
          <CopyAll fontSize="small" />
        </IconButton>
      )}
      <TextGrid text={input} disabled={disabled} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Copiado!</Typography>
      </Popover>
    </Stack>
  );
}
