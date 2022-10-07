import {v4 as uuidv4} from "uuid";

const links = {
	state: {
		header: {
			id: uuidv4(),
			path: "/",
			icon: "Logo.svg",
		},
		footer: {
			id: uuidv4(),
			path: "/",
			icon: "Logo_black.svg",
		},
		other: [
			{
				id: uuidv4(),
				path: "/our-coffee",
				text: "Our coffee",
			},
			{
				id: uuidv4(),
				path: "/goods",
				text: "For your pleasure",
			},
			{
				id: uuidv4(),
				path: "/contacts",
				text: "Contact us",
			},
		],
	},
	getters: {
		getHeaderLinks(state) {
			return {header: state.header, other: state.other}
		},
		getFooterLinks(state) {
			return {footer: state.footer, other: state.other}
		},
	}
}

export default links