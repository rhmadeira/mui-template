export const PAGE_SIZE_OPTIONS = [5, 10, 20, 50, 100];
export const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
export const CNPJ_REGEX = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

export const gridSpacing = 3;
export const drawerWidth = 210;
export const appDrawerWidth = 300;

export const mainContent = {
  backgroundColor: "#eef2f6",
  width: "100%",
  minHeight: "calc(100vh - 56px)",
  flexGrow: 1,
  marginTop: "56px",
  marginRight: "10px",
  borderRadius: 8,
  padding: "5px",
};

export const subMenuCaption = {
  fontSize: "0.6875rem",
  fontWeight: 500,
  color: "#6b778c",
  textTransform: "capitalize",
};

export const menuCaption = {
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#6b778c",
  padding: "6px",
  textTransform: "capitalize",
  marginTop: "10px",
};

export const commonAvatar = {
  cursor: "pointer",
  borderRadius: "8px",
};

export const smallAvatar = {
  width: "22px",
  height: "22px",
  fontSize: "1rem",
};

export const mediumAvatar = {
  width: "34px",
  height: "34px",
  fontSize: "1.2rem",
};

export const largeAvatar = {
  width: "44px",
  height: "44px",
  fontSize: "1.5rem",
};

export const customInput = {
  marginTop: 1,
  marginBottom: 1,
  "& > label": {
    top: 23,
    left: 0,
    color: "#6b778c",
    '&[data-shrink="false"]': {
      top: 5,
    },
  },
  "& > div > input": {
    padding: "30.5px 14px 11.5px !important",
  },
  "& legend": {
    display: "none",
  },
  "& fieldset": {
    top: 0,
  },
};
