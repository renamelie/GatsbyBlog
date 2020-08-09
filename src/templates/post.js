import React from 'react'
import Layout from '../components/layout'
import Bio from '../components/bio'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

import { Button, Divider } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

const ButtonGroup = Button.Group

export default ({ data, pageContext }) => {
	const { title, date } = data.markdownRemark.frontmatter
	const __html = data.markdownRemark.html
	const { prev, next } = pageContext

	return (
		<Layout>
			<SEO title={title} description={data.markdownRemark.excerpt} />
			<p>{date}</p>
			<div dangerouslySetInnerHTML={{ __html }} />
			<Bio />
			<Divider />
			<ButtonGroup>
				{next && (
					<Button type="primary" size="large">
						{console.log(next.frontmatter.slug)}
						<Link to={`/${next.frontmatter.slug}`}>
							<LeftOutlined />
							{next.frontmatter.title}
						</Link>
					</Button>
				)}
				{prev && (
					<Button type="primary" size="large">
						<Link to={`/${prev.frontmatter.slug}`}>
							{prev.frontmatter.title}
							<RightOutlined />
						</Link>
					</Button>
				)}
			</ButtonGroup>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			excerpt
			frontmatter {
				slug
				title
				date(formatString: "DD MMMM, YYYY")
			}
		}
	}
`
