import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { List, Avatar, Divider } from 'antd'

const Bio = () => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
					bio
					authorImage
				}
			}
		}
	`)

	return (
		<>
			<Divider orientation="left">Author</Divider>
			<List.Item>
				<List.Item.Meta
					avatar={<Avatar size={64} src={site.siteMetadata.authorImage} />}
					title={<Link to="/about">{site.siteMetadata.author}</Link>}
					description={site.siteMetadata.bio}
				/>
			</List.Item>
		</>
	)
}

export default Bio
