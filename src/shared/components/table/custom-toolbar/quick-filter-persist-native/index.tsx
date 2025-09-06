import { InputAdornment, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { StyledQuickFilter } from "./styled";
import { QuickFilterClear, QuickFilterControl } from "@mui/x-data-grid";

export default function QuickFilterPersistNative() {
  const [, setSearchParams] = useSearchParams();
  return (
    <StyledQuickFilter
      expanded
      parser={(searchInput) => {
        setSearchParams({ search: searchInput });
        return searchInput.split(",").map((value) => value.trim());
      }}
      debounceMs={1000}
    >
      <QuickFilterControl
        render={({ ref, ...other }) => (
          <TextField
            {...other}
            sx={{ width: 260 }}
            inputRef={ref}
            aria-label="Search"
            placeholder="Search..."
            size="small"
            autoFocus
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: other.value ? (
                  <InputAdornment position="end">
                    <QuickFilterClear
                      edge="end"
                      size="small"
                      aria-label="Clear search"
                      material={{ sx: { marginRight: -0.75 } }}
                    >
                      <CancelIcon fontSize="small" />
                    </QuickFilterClear>
                  </InputAdornment>
                ) : null,
                ...other.slotProps?.input,
              },
              ...other.slotProps,
            }}
          />
        )}
      />
    </StyledQuickFilter>
  );
}
