import { Vortex } from 'react-loader-spinner';

const style = {
	display: 'flex',
	justifyContent: 'center',
	padding: '100px 0',
}

export const Preloader = () => (
	<div style={style}>
		<Vortex
			visible={true}
			height="140"
			width="140"
			ariaLabel="vortex-loading"
			wrapperStyle={{}}
			wrapperClass="vortex-wrapper"
			colors={['#788787', '#5D6565', '#C2C2C2', '#B3C3C3', '#B7C3C3', 'grеy']}
		/>
	</div>
)