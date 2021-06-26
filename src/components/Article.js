import React from "react"; 

function Article({title, date, preview, id}) {
	return (
	<article key = {id}>
		<h3> {title} </h3>
		<small>	{date} || {"January 1, 1970"}  </small>
		<p> {preview} </p>
	</article>
	)
}

export default Article; 