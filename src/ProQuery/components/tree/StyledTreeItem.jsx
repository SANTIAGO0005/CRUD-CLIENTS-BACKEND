
import { forwardRef} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';


const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '&.Mui-expanded': {
        fontWeight: theme.typography.fontWeightRegular,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: 'var(--tree-view-color)',
      },
      [`& .${treeItemClasses.label}`]: {
        fontWeight: 'inherit',
        color: 'inherit',
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 12,
      [`& .${treeItemClasses.content}`]: {
        paddingLeft: theme.spacing(4),
      },
    },
  }));

  
export const StyledTreeItem = forwardRef(function StyledTreeItem(props, ref) {
    const theme = useTheme();
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      labelText,
      colorForDarkMode,
      bgColorForDarkMode,
      ...other
    } = props;
  
    const styleProps = {
      '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
      '--tree-view-bg-color':
        theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
    };
  
    return (
      <StyledTreeItemRoot
        label={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 0,
              pr: 0.8,
            }}
          >
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        }
        style={styleProps}
        {...other}
        ref={ref}
      />
    );
  });
