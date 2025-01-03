export interface GameType {
	_id: string;
	title: string;
	genre: string;
	description: string;
	release_date: string;
}

export interface IAuthContext {
	signIn: (token: string) => void;
	signOut: () => void;
	session?: string | null;
	isLoading: boolean;
}
