import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Clone Contests",
    imageUrl: "img/demos/clone.gif",
    description: (
      <>
        Automatically clone sample testcases and create source files preloaded with your favorite
        template,
      </>
    ),
    to: "docs/clone"
  },
  {
    title: "Test",
    imageUrl: "img/demos/test.gif",
    description: (
      <>
        Test your code against sample testcases quickly and with a pretty output.
        <br />
        Supported Veredicts: <b>AC, WA, TLE, RTE, CE</b>
      </>
    ),
    to: "docs/test"
  },
  {
    title: "Create Files With Template",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: <>Create source files with the corresponding template loaded</>,
    to: "docs/create"
  },
  {
    title: "Debug",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Run code with your own debugging flags easily. Input can be from the keyboard or from a test
        case file.
      </>
    ),
    to: "docs/debug"
  },
  {
    title: "Add Test Cases",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Add a test case for the specified source code file. It will prompt you for the input and the
        expected output
      </>
    ),
    to: "docs/add-test-case"
  },
  {
    title: "Submit",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>Submit your code to online judges pretty fast by just running a single command.</>
    ),
    to: "docs/submit"
  },
  {
    title: "Vim Plugin",
    imageUrl: "https://miro.medium.com/max/1022/0*6ve47nqg93ZzZxws.png",
    description: (
      <>
        Vim users can install{" "}
        <Link to="https://github.com/searleser97/cpbooster.vim">cpbooster.vim</Link> plugin to boost
        their speed even more.
      </>
    ),
    to: "https://github.com/searleser97/cpbooster.vim"
  },
  {
    title: "Neovim Plugin",
    imageUrl: "img/nvim-icon.png",
    description: (
      <>
        Vim users can install{" "}
        <Link to="https://github.com/searleser97/cpbooster.vim">cpbooster.vim</Link> plugin to boost
        their speed even more.
      </>
    ),
    to: "https://github.com/searleser97/cpbooster.vim"
  }
];

function Feature({ imageUrl, title, description, to }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = useBaseUrl(to);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={toUrl}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description={`${siteConfig.title}`}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className={clsx("container", styles.container)}>
          <h1 className={clsx(styles.boldInGreen, styles.title, "hero__title")}>
            <b>cpb</b>ooster
          </h1>
          <p className={clsx(styles.boldInGreen, styles.subtitle, "hero__subtitle")}>
            <b>C</b>ompetitive <b>P</b>rogramming <b>B</b>ooster
          </p>
          <div className={styles.buttons}>
            <Link className={clsx(styles.getStartedButton)} to={useBaseUrl("docs/About")}>
              Get Started
            </Link>
          </div>
          <br />
          <br />
          <div className={styles.demo_gif}>
            <img src="https://searleser97.gitlab.io/competitive-programming-notes/cpbooster/cpbooster.gif" />
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={clsx(styles.featuresRow, "row")}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
