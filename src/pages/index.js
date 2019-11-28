import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Separator from "../components/separator"
import Section from "../components/section"
import VancouverIsland from "../components/vanvouver-island"
import LinkList from "../components/link-list"
import LinkListItem from "../components/link-list-item"

const IndexPage = () => {
  const vanvouverIsland = <VancouverIsland />
  return (
    <Layout>
      <SEO title="Home" />
      <Section id="designer" title="A front-end web developer and designer.">
        <p>
          I've got masses of experience building fast, responsive, easy to use
          websites which work across a huge variety of devices, browsers,
          screens and input devices. I build things which are easy &#8212; to
          find, read, use, enjoy and remember. I build for the human beings who
          use the site, including the people who have to look after it when I'm
          done. I enjoy presenting my work and telling engaging stories.
        </p>
        <p>
          Experienced with <abbr>HTML5</abbr>, <abbr>CSS</abbr>,{" "}
          <abbr>SASS</abbr> & <abbr>LESS</abbr>, Bootstrap, Javascript,{" "}
          <abbr>ES6</abbr>, React, Redux, Node.js & <abbr>npm</abbr>, Webpack,
          Babel, Gulp, Razor, Liquid, <abbr>XSLT</abbr>,<abbr>WAI-ARIA</abbr>,{" "}
          <abbr>SVG</abbr>, Wordpress, <abbr>DNN</abbr>, SharePoint, Git,{" "}
          <abbr title="Team Foundation Server">TFS</abbr>, Azure, Cloudflare,{" "}
          Photoshop, Illustrator, Sketch and many other technologies.
        </p>
        <p className="toolbar" role="navigation">
          <Link to="/portfolio" className="cta">
            Look at some recent projects
          </Link>
          <a
            className="cta"
            href="media/documents/OliverHodgson.pdf"
            type="application/pdf"
          >
            Read my résumé
          </a>
        </p>
      </Section>
      <Separator />
      <Section id="biker" title=">A mountain biker.">
        <p>
          The narrow ribbon of sinuous, beautiful singletrack, cutting through
          the trees, ever changing with the weather. That epic ride which takes
          you out to the middle of nowhere and back, just so you can see what
          the middle of nowhere looks like. The epic, endless, soul-destroying
          climb, followed by an epic, endless, soul-restoring view from the
          summit. That challenging technical feature you've never beaten before,
          defeated. That feeling of utter exhaustion, elation and achievement.
          The excitement of finding somewhere new. The high fives with your
          friends at the bottom of an amazing descent. The feeling of flow and
          joy, even on a trail you've ridden hundreds of times before.
        </p>
      </Section>
      <Separator />
      <Section
        id="how"
        title="All manner of other things."
        icon={vanvouverIsland}
      >
        <p className="adr">
          I'm based on Vancouver Island in
          <abbr className="region" title="British Columbia">
            BC
          </abbr>
          ,<span className="country-name">Canada</span>.
        </p>
        <p>
          You can reach me on
          <a
            href="mailto:olly@thinkdrastic.net?subject=oliverhodgson.com"
            rel="me"
            className="email"
          >
            olly@thinkdrastic.net
          </a>
          or <span className="tel">+1 (250) 650-9612‬</span>.
        </p>
        <p>
          Perhaps
          <a href="media/documents/OliverHodgson.pdf" type="application/pdf">
            grab my <abbr title="Curriculum Vitae">résumé</abbr>
          </a>
          ?
        </p>
      </Section>
      <Separator />
      <Section
        id="where"
        title="Olly is resident at these fine establishments:"
      >
        <LinkList>
          <LinkListItem
            url="http://thinkdrastic.net/"
            title="Think drastic"
            subTitle="It's one of those blog things"
          />
          <LinkListItem
            url="https://stackoverflow.com/story/ollyhodgson"
            title="Stack Overflow"
            subTitle="Massively multiplayer online technical support"
          />
          <LinkListItem
            url="https://github.com/OllyHodgson"
            title="Github"
            subTitle="Open sourcery and other magic"
          />
          <LinkListItem
            url="https://gist.github.com/OllyHodgson"
            title="Github Gist"
            subTitle="My collection of handy little code snippets"
          />
          <LinkListItem
            url="https://www.instagram.com/ollyhodgson/"
            title="Instagram"
            subTitle="A tiny square view of my adventures"
          />
          <LinkListItem
            url="https://twitter.com/ollyhodgson/"
            title="Twitter"
            subTitle="Communication in 140 characters or less"
          />
          <LinkListItem
            url="https://flickr.com/photos/gnarly/"
            title="Flickr"
            subTitle="Multi-coloured pixel collections"
          />
          <LinkListItem
            url="https://www.linkedin.com/in/ollyhodgson/"
            title="LinkedIn"
            subTitle="Putting the &#8220;work&#8221; into &#8220;social
              networking&#8221;"
          />
          <LinkListItem
            url="https://www.linkedin.com/in/ollyhodgson/"
            title="LinkedIn"
            subTitle="Putting the “work” into “social networking”"
          />
          <LinkListItem
            url="https://dnncommunity.org/Activity-Feed/userId/51"
            title="DNN Community"
            subTitle="It's nice to find a software community as nice as this one"
          />
        </LinkList>
      </Section>
    </Layout>
  )
}

export default IndexPage
