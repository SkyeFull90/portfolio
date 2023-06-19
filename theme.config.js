const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Skye Fullmer All rights reserved.
        <a href="/feed.xml">RSS</a>
      </small>
      <small>
        <a href='https://github.com/SkyeFull90/portfolio'>All Source code is under </a>
      </small>
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
