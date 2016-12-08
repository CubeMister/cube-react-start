import React from 'react';
import {Match, Link} from 'react-router';

const Empty = ()=> {
	return (
		<h3>Please select a topic</h3>
	);
};

const Topic = ({params})=> {
	return (
		<div>
			<h3>{params.topicID}</h3>
		</div>
	);
};

const Topics = ({pathname})=> {
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li><Link to={`${pathname}/rendering`}>Rendering with react</Link></li>
				<li><Link to={`${pathname}/components`}>Rendering with react</Link></li>
				<li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
			</ul>
			<Match exactly pattern={pathname} component={Empty} />
			<Match pattern={`${pathname}/:topicID`} component={Topic} />
		</div>
	);
};

export default Topics;