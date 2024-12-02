export interface FestivalType {
	_id: string;
	title: string;
	city: string;
	description: string;
}

export interface IAuthContext {
	signIn: (token: string) => void;
	signOut: () => void;
	session?: string | null;
	isLoading: boolean;
}
