import { Button, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ReactNode } from "react";

export const GoBack = ({
  route = "/",
  children = "Go back",
  sx,
}: {
  route?: string;
  children?: ReactNode;
  sx?: SxProps;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route, { replace: true });
  };
  return (
    <Button onClick={() => handleClick()} startIcon={<ArrowBackIcon />} sx={sx}>
      {children}
    </Button>
  );
};
