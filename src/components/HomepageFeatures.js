import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Node-Essentials',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Founder of the easy to use Node-Essentials NPM package, for documentation and tutorials check the <code>tutorials</code> directory.
      </>
    ),
  },
  {
    title: 'Daily articles (hopefully)',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I'll be writing about recent findings, solutions, research and life experiences daily if my time allows it. Be sure to check the <code>blog</code> directory.
      </>
    ),
  },
  {
    title: 'Halo API V2',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Founder of Halo Esports GG, learn how to integrate with my personal Halo API V2 used with all of my Halo projects.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
