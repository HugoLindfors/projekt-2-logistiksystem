<template>
	<div>
		<h1>Create employee</h1>
		<p><input type="text" placeholder="John Smith" /></p>
		<select name="role" id="role">
			<option value="picker">Picker</option>
			<option value="driver">Driver</option>
		</select>
		<p><input type="text" placeholder="Monday to Friday, 9 AM to 5 PM" /></p>
	</div>
</template>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}


</style>
