import { Box, styled } from '@mui/material';
import { Typography } from '@ui/Typography';

export const FileInput = styled('input')({
  display: 'none',
});

export const FileLabel = styled('label')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingTop: 8,
  paddingBottom: 8,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
}));

export const FileText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const EmptyImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  height: '200px',
  border: '1px solid',
  borderColor: theme.palette.grey[400],
  borderRadius: theme.shape.borderRadius,
}));

export const UploadedImage = styled('img')({
  width: '200px',
  height: 'auto',
  borderRadius: 5,
});
