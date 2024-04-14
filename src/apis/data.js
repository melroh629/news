export async function getImageUrl() {
	const response = await fetch('/src/apis/images.json');
	const data = await response.json();
	return data;
}
