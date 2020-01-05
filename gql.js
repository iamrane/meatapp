import gql from 'graphql-tag';

export const getMeatsQuery = gql`
	query allMeats {
		allMeats {
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
			oven
			fry
			grill
			meatGroup
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
			oven
			fry
			grill
			meatGroup
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
		$oven: String!
		$fry: String!
		$grill: String!
		$meatGroup: String!
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
			oven: $oven
			fry: $fry
			grill: $grill
			meatGroup: $meatGroup
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
			oven
			fry
			grill
			meatGroup
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
		$oven: String!
		$fry: String!
		$grill: String!
		$meatGroup: String!
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
			oven: $oven
			fry: $fry
			grill: $grill
			meatGroup: $meatGroup
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
			oven
			fry
			grill
			meatGroup
		}
	}
`;
