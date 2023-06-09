import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
const Buscador = (props) => {
	const [term, setTerm] = useState('');

	const handleInputChange = (event) => {
		const newTerm = event.target.value;
		setTerm(newTerm);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.onBuscar(term);
	};
	const handleClear = () => {
			setTerm('');
			props.onBuscar('');
	};
	return (
		<Grid component="form" onSubmit={handleSubmit}>
			<TextField
				placeholder="Buscar"
   			type="text"
   			variant="outlined"
   			fullWidth
   			size="small"
   			onChange={handleInputChange}
				value={term}
   			InputProps={{
       		startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
            ),
					endAdornment: term && (
						<InputAdornment position="end">
							<IconButton type="button" aria-label="clear" onClick={handleClear}>
								<ClearIcon/>
							</IconButton>
						</InputAdornment>
					)
         }}
		/>
		</Grid>	
    
  );
}
export default Buscador;
