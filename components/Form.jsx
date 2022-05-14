import { Input, Spacer, Button, Text, Grid } from '@nextui-org/react';

const Form = () => {
	return (
		<>
			<form>
				<Grid.Container>
					<Spacer x={15} />
					<Input labelPlaceholder="Ingrese Link" />
					<Spacer y={1} />
					<Button color="gradient" auto>
						Crear short
					</Button>
					<Spacer y={1} />
					<Text blockquote>{}</Text>
				</Grid.Container>
			</form>
		</>
	);
};

export default Form;
