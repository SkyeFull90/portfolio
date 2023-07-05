const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>


        <small>
            <time>{YEAR}</time> © Skye Fullmer All rights reserved.

        </small>
        <p>View the source code here: <a href="https://github/SkyeFull90/portfolio">Portfolio</a></p>
        <p>View the starter kit for this portfolio from: <a href={"https://vercel.com/new/templates/next.js/portfolio-starter-kit"}>Vercel</a></p>

      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
