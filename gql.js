import gql from 'graphql-tag';

export const getMeatsQuery = gql`
	query allMeats {
		meats {
			id
			slug
			shortDescription
			meatName
			marbling
			tenderness
			rare
			medium
			wellDone
			stew
			roast
			fry
			grill
			tags
		}
	}
`;

export const getMeatBySlugQuery = gql`
	query Meat($slug: String!) {
		Meat(slug: $slug) {
			id
			slug
			shortDescription
			meatName
			marbling
			tenderness
			rare
			medium
			wellDone
			stew
			roast
			fry
			grill
			tags
		}
	}
`;

export const updateMeatQuery = gql`
	mutation UpdateMeat(
		$id: ID!
		$slug: String!
		$shortDescription: String
		$meatName: String!
		$marbling: Float!
		$tenderness: Float!
		$rare: Int!
		$medium: Int!
		$wellDone: Int!
		$stew: String!
		$roast: String!
		$fry: String!
		$grill: String!
		$tags: String!
	) {
		updateMeat(
			id: $id
			slug: $slug
			shortDescription: $shortDescription
			meatName: $meatName
			marbling: $marbling
			tenderness: $tenderness
			rare: $rare
			medium: $medium
			wellDone: $wellDone
			stew: $stew
			roast: $roast
			fry: $fry
			grill: $grill
			tags: $tags
		) {
			id
			slug
			shortDescription
			meatName
			marbling
			tenderness
			rare
			medium
			wellDone
			stew
			roast
			fry
			grill
			tags
		}
	}
`;

export const createMeatQuery = gql`
	mutation CreateMeat(
		$slug: String!
		$shortDescription: String
		$meatName: String!
		$marbling: Float!
		$tenderness: Float!
		$rare: Int!
		$medium: Int!
		$wellDone: Int!
		$stew: String!
		$roast: String!
		$fry: String!
		$grill: String!
		$tags: String!
	) {
		createMeat(
			slug: $slug
			shortDescription: $shortDescription
			meatName: $meatName
			marbling: $marbling
			tenderness: $tenderness
			rare: $rare
			medium: $medium
			wellDone: $wellDone
			stew: $stew
			roast: $roast
			fry: $fry
			grill: $grill
			tags: $tags
		) {
			id
			slug
			shortDescription
			meatName
			marbling
			tenderness
			rare
			medium
			wellDone
			stew
			roast
			fry
			grill
			tags
		}
	}
`;
