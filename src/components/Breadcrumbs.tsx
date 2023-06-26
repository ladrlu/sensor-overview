import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import BreadcrumbsMUI from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import LinkMUI from "@mui/material/Link";

export const Breadcrumbs = ({ lastCrumb }: { lastCrumb?: string }) => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname.split("/");

  const crumbsLinks = crumbs
    .filter((crumb, index) => crumb !== "" && index !== crumbs.length - 1)
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Link to={currentLink} key={crumb}>
          {crumb}
        </Link>
      );
    });

  return (
    <BreadcrumbsMUI>
      <LinkMUI component={Link} to="/" aria-label="home">
        <HomeIcon />
      </LinkMUI>
      {crumbsLinks}
      <Typography>
        {lastCrumb ? lastCrumb : crumbs[crumbs.length - 1]}
      </Typography>
    </BreadcrumbsMUI>
  );
};
