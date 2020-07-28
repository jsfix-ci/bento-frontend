import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import { maxProperties } from '../../bento/armDetailData';
import { Anchor, prepareLinks } from '../Anchor/anchor';

const PropertyItem = ({
  label, value, link, labelLink, classes,
}) => {
  const defaultValue = '';
  return (
    <Grid item>
      <Grid container>
        <Grid item xs={12}>
          <span className={classes.title}>
            {labelLink ? <Anchor text={label} link={labelLink} classes={classes} /> : label}
          </span>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          {value || value === 0 ? (
            link ? <Anchor text={value} link={link} classes={classes} /> : value
          ) : defaultValue}
        </Grid>
      </Grid>
    </Grid>
  );
};

const PropertySubsection = ({ section: config, data, classes }) => {
  const properties = prepareLinks(config.properties, data);
  return (
    <Grid item container className={classes.subsection}>
      <Grid item xs={12}>
        <span className={classes.detailContainerHeader}>{config.sectionHeader}</span>
      </Grid>
      {
        config.sectionDesc
          ? (
            <Grid item container className={classes.descriptionPart} xs={12}>
              <Grid item><span className={classes.description}>Description -</span></Grid>
              <Grid item><span>{config.sectionDesc}</span></Grid>
            </Grid>
          ) : ''
      }
      <Grid item xs={12} className={classes.propertyPanel}>
        <Grid container spacing={2} direction="column">
          {properties.slice(0, maxProperties).map((prop) => (
            <PropertyItem
              label={prop.label}
              value={data[prop.dataField]}
              link={prop.link}
              labelLink={prop.labelLink}
              classes={classes}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  detailContainerHeader: {
    textTransform: 'uppercase',
    fontFamily: 'Lato',
    fontSize: '17px',
    letterSpacing: '0.025em',
  },
  descriptionPart: {
    paddingBottom: '26px',
  },
  description: {
    fontWeight: 'bold',
  },
  propertyPanel: {
    marginTop: '15px',
  },
  title: {
    color: '#0296C9',
    fontFamily: theme.custom.fontFamilySans,
    fontSize: '15px',
    lineHeight: '12px',
    letterSpacing: '0.017em',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  content: {
    fontSize: '14px',
  },
  link: {
    color: '#DD401C',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:visited': {
      color: '#9F3D26',
    },
  },
});

export default withStyles(styles, { withTheme: true })(PropertySubsection);
