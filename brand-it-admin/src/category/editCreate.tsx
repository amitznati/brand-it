import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Create, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, required, TopToolbar, ListButton, ShowButton } from 'react-admin';
import CustomFormToolbar from "../commonComponents/CustomFormToolbar";


const useStyles = makeStyles({
	fieldsRoot: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '40rem'
	},
	margin: {
		margin: '2rem 0'
	}
});
const CatEditActions = (props) => {
	const { basePath, data } = props;
	return (
		<TopToolbar>
			<ListButton basePath={basePath} />
			<ShowButton basePath={basePath} record={data} />
		</TopToolbar>
	);
}
const Fields = () => {
	const classes = useStyles();
	return (
		<div className={classes.fieldsRoot}>
			<TextInput className={classes.margin} label="Name" source="name" validate={[required()]} />
			<ReferenceInput className={classes.margin} label="Business" source="business.id" reference="Business" validate={[required()]}>
				<SelectInput optionText="name" />
			</ReferenceInput>
		</div>
	)
}
export const CategoryCreate = (props) => (
	<Create {...props} actions={<CatEditActions />}>
		<SimpleForm toolbar={<CustomFormToolbar />}>
			<Fields />
		</SimpleForm>
	</Create>
);
const EditTitle = (props) => <span>Category - {props.record.name}  #  {props.record.id}</span>;
export const CategoryEdit = (props) => (
	<Edit {...props} title={<EditTitle />} actions={<CatEditActions />}>
		<SimpleForm>
			<TextInput disabled label="Id" source="id" />
			<Fields />
		</SimpleForm>
	</Edit>
);
