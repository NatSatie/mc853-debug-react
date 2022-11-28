import React from 'react';

function useStateCustom() {
    React.useState(0);
    React.useEffect(() => () => {});
}

function CounterCustom() {
	useStateCustom();
	React.useState(0);
	return <div>Open React Dev Tools Components panel,
		click on Counter component and
		observe the crash in the logging console.</div>;
}

function useState() {
	React.useState(0);
	React.useEffect(() => () => {});
}

function Counter() {
	useState();
	React.useState(0);
	return <div>Open React Dev Tools Components panel,
		click on Counter component and
		observe the crash in the logging console.</div>;
}


export default Counter;