module.exports = {
	siteMetadata: {
		title: `Blog de Meeili`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `Amélie Ren`,
		bio: `Dev Web | Mummy de Pirate | Autodidacte | Freelance`,
		authorImage: `https://raw.githubusercontent.com/renamelie/GatsbyBlog/master/src/images/meAvatar.png`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/blog/`,
			},
		},
		`gatsby-transformer-remark`,
		{
			resolve: 'gatsby-plugin-less',
			options: {
				lessOptions: {
					javascriptEnabled: true,
					modifyVars: require('./src/theme/antd'),
				},
			},
		},
		{
			resolve: 'gatsby-plugin-antd',
			options: {
				// Activate less files
				style: true,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/blog.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
