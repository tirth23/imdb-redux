import React from "react";
import Banner from "./Banner";
import Movies from "./Movies";
import WatchListContextWrapper from "../context/WatchListContext";
import Counter from "./Counter";
import TodoRedux from "./ToDoRedux";
import User from "./User";
import UserRedux from "./UserRedux";

function Home() {

	return (
		<div>
			<Banner />
			<Movies/>
      {/* can also wrap individual components */}
      {/* <WatchListContextWrapper>
        <Movies/>
      </WatchListContextWrapper> */}

			{/* <Counter /> */}
			{/* <TodoRedux /> */}
      {/* <User /> */}
      {/* <UserRedux /> */}

		</div>
	);
}

export default Home;
