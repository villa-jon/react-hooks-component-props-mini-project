import React from "react"; 
import Article from "./Article";

function ArticleList({ posts }) {
const list = posts.map((post) => 
	<Article 
	key = {post.id}
	title = {post.title}
	data = {post.data}
	preview = {post.preview}
	/>	
)
	return(
		<main >
			{list}
		</main>
	);
}

export default ArticleList; 