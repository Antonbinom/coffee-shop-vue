export const loading = (response, this) => {
	if (response.statusText === "OK") {
		this.$store.dispatch("setIsLoading", false);
	}
}