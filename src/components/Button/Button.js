export default function Btn({className, btnText, onClick}) {
	return (
		<button type="button" className={`btn ${className}`} onClick={onClick}>
			{btnText}
		</button>
	);
}
